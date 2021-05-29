# react-rails-pagination

- [Intro](#intro)
- [Installation](#installation)
- [Examples](#examples)
- [Usage] (#usage)
- [Props](#props)


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

## Examples

#### Standard Component Style

![pagination-std](https://user-images.githubusercontent.com/25799316/120065767-a91ce980-c090-11eb-9532-a80704b253ce.png)

#### Colored Component Styles
![pagination-primary](https://user-images.githubusercontent.com/25799316/120065765-a8845300-c090-11eb-8be0-6d89bd7abb82.png)
![pagination-secondary](https://user-images.githubusercontent.com/25799316/120065766-a8845300-c090-11eb-9e1d-64c1d5549a70.png)

![pagination-success](https://user-images.githubusercontent.com/25799316/120065769-a91ce980-c090-11eb-87c4-721f4768971d.png)
![pagination-danger](https://user-images.githubusercontent.com/25799316/120065825-06189f80-c091-11eb-83da-1fa0bd73818c.png)

![pagination-warning](https://user-images.githubusercontent.com/25799316/120065770-a9b58000-c090-11eb-9e11-3bae4e9aa26a.png)
![pagination-info](https://user-images.githubusercontent.com/25799316/120065754-a4f0cc00-c090-11eb-9365-81b84550d738.png)

#### Outlined Component Styles

![pagination-outline](https://user-images.githubusercontent.com/25799316/120065755-a5896280-c090-11eb-9e6a-35498ae2f97c.png)

![pagination-outline-primary](https://user-images.githubusercontent.com/25799316/120065759-a6ba8f80-c090-11eb-9740-9ad49f5f2a52.png)
![pagination-outline-secondary](https://user-images.githubusercontent.com/25799316/120065760-a7532600-c090-11eb-9c8f-e4f06dc2a0f3.png)

![pagination-outline-success](https://user-images.githubusercontent.com/25799316/120065761-a7532600-c090-11eb-8c9e-94cbedbe9da6.png)
![pagination-outline-danger](https://user-images.githubusercontent.com/25799316/120065756-a621f900-c090-11eb-935e-45bd29f0416b.png)


![pagination-outline-warning](https://user-images.githubusercontent.com/25799316/120065763-a7ebbc80-c090-11eb-9a93-a32dd46bab87.png)
![pagination-outline-info](https://user-images.githubusercontent.com/25799316/120065758-a621f900-c090-11eb-8d7a-2f1f566e8b3a.png)

## Usage

```JSX
import Pagination from 'react-rails-pagination';

...

function MyComponent = (props) => {
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

  handleChangePage(currentPage) {  // Required as a prop to update data in your table.
    setPage(parseInt(currentPage)); // Update Current Page
    fetchTableData(); // Fetch Data for the new page
  };

  ...

  return (
    <>
      <h3>Upcoming Events</h3>
      <table>
        <thead>
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

## Props

| Name                     | Type       | Description                                                                                  |
| ------------------------ | ---------- | -------------------------------------------------------------------------------------------- |
| `page`                   | `Number`   | **Required.** The current active page.                                                       |
| `pages`                  | `Number`   | **Required.** The Total number of pages available.                                           |
| `handleChangePage`       | `Function` | **Required.** A function that handles what happens when current active page is changed. Refer to example for demo usage |
| `outline`                | `Boolean`  | Switches style of element to outlined                                                        |
| `color`                  | `String`   | Switches style of component according to color. Acceptable inputs are: `primary`, `secondary`, `success`, `danger`, `warning`, `info` |
| `hideEndArrows`          | `Boolean`  | Hide buttons that allow jumping to `Last` and `First` page                                   |
| `hideNavButtons`         | `Boolean`  | Hide buttons that allow navigation to `Next` and `Previous` page                             |
