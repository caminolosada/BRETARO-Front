# Bretaro App

## Data layer

### Data

- Collection of Books

  - Book:

    - id: string
    - title: string
    - author: string
    - frontPage: string
    - publicationYear: string
    - editorial: string
    - status: boolean
    - rating: number
    - destination: string
    - cosmos: string

  - LoggedUser:

    - username: string
    - passwords: string

  - ¿Modales y feedbacks de usuario?

## Actions

- getBook()
- getBooks()
- addBook()
- removeBook()
- updateBook()
- filterReadBooks()
- loginUser()
- logoutUser()
- showModal()
- hideModal()
- showSpinner()
- hideSpinner()

## Communication FRONT - API

- useBooks()
  - getBooks()
  - getBooksById()
  - addBooks()
  - updateBooks()
  - removeBooks()
- useUser ()
  - loginUser()
- useToken()
  - getDataToken()
    -useLocalStorage()
    setToken()
    -getToken()
  - removeToken()

## Components

### App

- Receives a dispatch action
- Check if there is token in localStorage with getToken() action
  - if token -> navigate to listPage
  - if no token -> navigate loginForm
- Renders layout

### Header

- Shows the textLogo

### NavBar

- Renders the homeNavLink, the createNavLink
- Create logoutActionOnClick to call logutUser() and removeToken() from useToken custom hook.
- Send the logoutActionOnClick to logoutButton

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked.

### LoginPage

- Renders LoginForm
- Receives a dispatch
- Creates a handleOnSubmit(receives userCrendentials) function to call loginUser(receives userCredentials from handleOnSubmit) from useUser custom hook, extract data token with getDataToken() from useToken custom hook and dispatch loginUserActionCreator with extracted data, calls setToken() from useLocalStorage custom hook and navigate to BooksListPage.

### LoginForm

- Has a own state (useState)
- Receives a handleOnSubmit action
- Create a functionOnHandleOnSubmit, calls eventPreventDefault(), calls handleOnSubmit(userCredentials) and reser UserCredentials.
- Shows username and password inputs and button Send

### CreateFormPage

- Renders generalForm
- Receives a dispatch
- Create a handleOnSubmit(receives book data from form state), calls addBook(receives book from handleOnSubmit) form useBooks() customHook, dispatch addBookActionCreator(book data from handleOnSubmit) and navigate to BooksListPage.

### EditFormPage

- Renders generalForm
- Receives a dispatch
- Create a handleOnSubmit(receives book data from form state), calls updateBook(receives book from handleOnSubmit) form useBooks() customHook, dispatch updateBookActionCreator(book data from handleOnSubmit) and navigate to BooksListPage.

### GeneralForm

- Has an own state
- Receives from props text for button, optional BookData and actionOnSubmit
- if receives bookData from props --> shows data in the inputs. Sets ownState properties from bookData props.
- show imputs and button

### BookListPage

- Receives a dispatch
- Call getBooks from useBooks custom hook and dispatch loadBooksActionCreator()
- Receives a partial collection of books from the store with useAppSelector(state)
- Render BookList
- Render button pagination and handles load more

### BookList

- Receives a partial collection of books from props
- Renders as many BookCards as books are in the partial collection received
- Create a deleteActionOnClick(receives an id), who calls removeBooks(receives a id) from useBooks custom hook and removeBookActionCreator(id)
- Create a detailsActionOnSubmit(id) to navigate to detailsBookPage

### BookCard

- Receives a book data form props
- Receives deleteActionOnClick for deleteButton
- Receives a detailsActionOnSubmit(id)
- Shows image, title author of book and deleteButton (partial bookData)

### DetailBookPage

- Calls getBookById() from useBooks custom hook to catch a book
- Creates a editActionOnClick() to navigate to updateFormPage(book)
- Renders DetailBook component.
- Renders a button with text "modify" and actionOnClick

### DetailBook

- Receives a book data from props
- Shows bookData: photo, status & valoration, title, author, year of publication, editorial, destination, cosmos (things I would like to remember from the book)
