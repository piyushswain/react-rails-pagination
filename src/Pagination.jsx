import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    const { page, path } = this.props;
    this.path = path === '' ? `${window.location.pathname}?page=` : `${path}?page=`;
    this.state = { page: parseInt(page) };
  }

  static getDerivedStateFromProps(props) {
    return {
      page: props.page,
    };
  }

  changePage(event, pagePath, pageNumber) {
    const { handleChangePage } = this.props;
    event.preventDefault();
    if (window.history.pushState) {
      window.history.pushState("Update from React Pagination", document.title, pagePath);
    } else {
      document.location.href = pagePath;
    }
    handleChangePage(pageNumber);
  }

  paginationElement(number, index) {
    const displayName = number;
    const { page } = this.state;
    const { pages } = this.props;
    let pageNumber = number;
    let pagePath = `${this.path}${pageNumber}`;
    let canClick = true;

    if (pageNumber === 'Prev') {
      pageNumber = page - 1;
      pagePath = `${this.path}${pageNumber}`;
      if (page === 1) canClick = false;
    } else if (pageNumber === 'Next') {
      pageNumber = page + 1;
      pagePath = `${this.path}${pageNumber}`;
      if (page === pages) canClick = false;
    } else if (pageNumber === '...') {
      pagePath = '';
      canClick = false;
    }

    if (pageNumber === page) {
      canClick = false;
    }

    return (
      <li key={index} className={number === page ? 'active' : ''}>
        <a
          href={pagePath}
          style={canClick ? null : { pointerEvents: 'none' }}
          onClick={(e) => this.changePage(e, pagePath, pageNumber)}
        >
          {displayName}
        </a>
      </li>
    );
  }

  render() {
    const self = this;
    const { page } = self.state;
    const lastPage = self.props.pages;
    const pageLinks = [];
    const maxElements = 3;
    const edgeElementCount = 3;
    const renderedPages = [];

    for (let i = page - maxElements; i <= page + maxElements; i += 1) {
      if (!renderedPages.includes(i)) renderedPages.push(i);
    }

    if ((lastPage - renderedPages[renderedPages.length - 1]) >= edgeElementCount) {
      renderedPages.push('...');
      renderedPages.push(lastPage - 1);
      renderedPages.push(lastPage);
    } else {
      for (let i = renderedPages[renderedPages.length - 1] + 1; i <= lastPage; i += 1) {
        if (!renderedPages.includes(i)) renderedPages.push(i);
      }
    }

    if ((renderedPages[0] - 1) > edgeElementCount) {
      renderedPages.unshift('...');
      renderedPages.unshift(2);
      renderedPages.unshift(1);
    } else {
      for (let i = renderedPages[0] - 1; i >= 1; i -= 1) {
        if (!renderedPages.includes(i)) renderedPages.unshift(i);
      }
    }
    renderedPages.unshift('Prev');
    renderedPages.push('Next');

    renderedPages.forEach((singlePage, index) => {
      if ((singlePage > 0 && singlePage <= lastPage) || singlePage === '...' || singlePage === 'Prev' || singlePage === 'Next') pageLinks.push(self.paginationElement(singlePage, index));
    });

    return (
      <ul className="pagination">
        {pageLinks}
      </ul>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  path: PropTypes.string,
};

Pagination.defaultProps = {
  path: '',
};

export default Pagination;
