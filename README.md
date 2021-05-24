# react-rails-pagination

- [Intro](#intro)
- [Installation](#install)
- [Example](#example)


## Intro
React Component for adding Pagination support to Rails or any other MVC Framework. This is a lightweight component that allows you to add pagination components .i.e the page number links and the navigation (Prev/Next) links.

This component was designed for a Rails project where REACT was being used as a frontend, but this should work equally well on other MVC Frameworks or websites that require or use a similar setup as well.

## Installation
```shell
yarn add react-rails-pagination
```

or

```shell
npm install react-rails-pagination --save
```

## Example

```JSX
import Pagination from 'react-rails-pagination';

...

const [page, setPage] = useState(0);
const [totalPage, setTotalPages] = useState(0);
// This is a default value for totalPages, update it before you render your component. For Rails you can use `Model.query.page(params[:page]).per(10).total_pages` to get this value.

const fetchTableData = () => {
  // You can replace the below mentioned API Call with a fetch or axios or whatever else you use in your project
  Rails.ajax({
    type: 'GET',
    url: `${/your-required-path-here}?page=${currentPage}`, // Replace with the URL you want to fetch data from
    success(response) {
      ...
      //Update Table Data on success
    },
  });
};

handleChangePage(currentPage) {         // Required as a prop to update data in your table.
  setPage(parseInt(currentPage));
  fetchTableData();
};

const MyComponent = () => {

  ...

  return (
    <>
      <h3 className="mt-4">Upcoming Events</h3>
      <table className="table table-borderless table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Starts</th>
            <th scope="col">Ends</th>
          </tr>
        </thead>
        <tbody>{invitationsList}</tbody>
      </table>

      <Pagination page={page} pages={totalPages} handleChangePage={handleChangePage} />
      {/* Component render with required props */}
    </>
  );
};
```
