import React, { Component } from 'react';

import v4 from 'uuid/v4';

// components
import Header from './Header/index';
import SignIn from './Sign-in/index';
import SignUp from './Sign-up';
import Menu from './Menu/index';
import MenuFilter from './MenuFilter/index';
import Comment from './Comment/index';
import CommentList from './CommentList/index';
import Modal from './Modal/index';
import Loading from './Loading/index';
import History from './History/index';

// config
import * as Api from './services/api';

class App extends Component {
  state = {
    isModalOpenForPost: false,
    isModalOpen: false,
    isModalLoading: false,
    listHistory: [],
    focusListItem: null,
    address: '',
    price: '',
    rating: '',
    comments: [],
    menu: [],
    filter: '',
  };

  componentDidMount() {
    Api.getAllList('history').then(list =>
      this.setState({
        listHistory: list,
      }),
    );
    Api.getAllList('historyTitles').then(listTitles =>
      this.setState({
        historyTitles: listTitles,
      }),
    );
    Api.getAllList('menu').then(listMenu =>
      this.setState({
        menu: listMenu,
      }),
    );
  }

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  menuFilter = filter =>
    this.state.menu.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

  handleOpenModal = () => {
    this.setState({
      isModalLoading: true,
    });
    this.setState({
      isModalLoading: false,
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleOpenModalForPost = () => {
    this.setState({
      isModalOpenForPost: true,
    });
  };

  handleCloseModalForPost = () => {
    this.setState({
      focusListItem: null,
      isModalOpenForPost: false,
    });
  };

  handleSubmitNodeEditor = (text, rate) => {
    this.setState(prevState => ({
      comments: [{ id: Date.now(), text, rate }, ...prevState.comments],
    }));
  };

  handleBtnDelete = id => {
    Api.deleteById('history', id).then(response => {
      if (response.status !== 200) return;
      this.setState(prev => ({
        listHistory: prev.listHistory.filter(el => el.id !== id),
      }));
    });
  };

  handleBtnMore = id => {
    this.setState({
      isModalLoading: true,
    });
    Api.getById('history', id).then(response => {
      if (response.status !== 200) return;

      this.setState({
        isModalLoading: false,
        focusListItem: response.data,
      });
    });
  };

  handleInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleAddItem = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;

    const date = new Date();

    const time = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    const newItemInList = {
      date: `${time.day}/${time.month}/${time.year}`,
      address,
      price,
      rating,
    };
    Api.addItem('history', newItemInList).then(response => {
      if (response.status !== 201) return;

      Api.getAllList('history').then(allList =>
        this.setState({
          listHistory: allList,
          address: null,
          price: null,
          rating: null,
          isModalOpenForPost: false,
        }),
      );
    });
  };

  handleAddComment = (text, rate) => {
    this.setState(prevState => ({
      comments: [
        {
          id: v4(),
          text,
          rate,
        },
        ...prevState.comments,
      ],
    }));
  };

  render() {
    const {
      listHistory,
      focusListItem,
      isModalOpen,
      isModalLoading,
      isModalOpenForPost,
      address,
      price,
      rating,
      filter,
      comments,
    } = this.state;

    const filteredMenu = this.menuFilter(filter);

    return (
      <div>
        <Header />
        <SignIn />
        <SignUp />
        <hr />
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal handleCloseClick={this.handleCloseModal}>
            <div>
              <p>Fusce egestas elit eget lorem</p>
            </div>
          </Modal>
        )}
        <hr />
        <MenuFilter
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <Menu menuList={filteredMenu} />
        <hr />
        <Comment onSubmit={this.handleAddComment} />
        <CommentList comments={comments} />
        <hr />
        {isModalOpenForPost && (
          <Modal handleCloseClick={this.handleCloseModalForPost}>
            <form onSubmit={this.handleAddItem}>
              <input
                type="text"
                value={address}
                name="address"
                onChange={this.handleInputValue}
                placeholder="Address"
              />
              <input
                type="number"
                value={price}
                name="price"
                onChange={this.handleInputValue}
                placeholder="Price"
              />
              <input
                type="number"
                value={rating}
                name="rating"
                onChange={this.handleInputValue}
                placeholder="Rating"
              />
              <input type="submit" value="Submit" />
            </form>
          </Modal>
        )}

        {isModalLoading && <Loading />}

        {focusListItem && (
          <Modal handleCloseClick={this.handleCloseModalForPost}>
            {focusListItem && (
              <div>
                <p>Date: {focusListItem.date}</p>
                <p>Price: {focusListItem.price}</p>
                <p>Address: {focusListItem.address}</p>
                <p>Rating: {focusListItem.rating}</p>
              </div>
            )}
          </Modal>
        )}
        <History
          list={listHistory}
          deleteClick={this.handleBtnDelete}
          moreInfoClick={this.handleBtnMore}
        />
        <button type="button" onClick={this.handleOpenModalForPost}>
          Add Item for History
        </button>
        <hr />
      </div>
    );
  }
}

export default App;
