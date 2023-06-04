import { modalDataStructure } from "../../types";

const modalData: modalDataStructure = {
  icon: {
    ok: "/public/images/ok.svg",
    error: "/public/images/bad.svg",
  },
  feedback: {
    ok: "Good!",
    error: "Glops!",
  },
  message: {
    okLogOut: "You have successfully logged out!",
    okAdd: "You have a new book on your shelf",
    okDeleted: "You no longer have this book on your shelf",
    okEdit: "You book has been successfully modified",
    errorCredentials: "Wrong credentials, try again!",
    erorAdd: "Couldn't add this book on your shelf",
    errorRemove: "Couldn't remove this book from your shelf",
    errorEdit: "Couldn't edit this book",
  },
  className: {
    ok: "__ok",
    error: "__error",
  },
};

export default modalData;
