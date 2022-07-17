import ButtonHome from "./UI/ButtonsHome";
import ModalUserList from "./Registry/List/ModalUserList";
import ModalDataRegistry from "./Registry/UserData/ModalDataRegistry";
import { useState } from "react";

const usersList = [];

export default function SimpleUserRegistry() {
  const [usersRegistred, setUsersRegistred] = useState(usersList);
  const [displayScreens, setDisplayScreens] = useState({
    dataRegistry: "none",
    userList: "none",
  });

  const addNewUserHandler = (user) => {
    setUsersRegistred((userList) => {
      let lastId;
      userList.length === 0
        ? (lastId = userList.length)
        : (lastId = userList[userList.length - 1]);

      const newId =
        lastId === 0 ? lastId : parseInt(lastId.id.replace("user", "")) + 1;

      const newUser = { ...user, id: `user${newId}` };
      userList.push(newUser);
      return [...userList];
    });
    setDisplayScreens((screens) => {
      return { ...screens, dataRegistry: "none", userList: "yes" };
    });
  };

  const deletedUser = (userId) => {
    setUsersRegistred((userList) => {
      const newUsers = userList.filter((user) => user.id !== userId);
      return [...newUsers];
    });
  };

  const onAddUserScreenHandler = () => {
    setDisplayScreens((screens) => {
      return { ...screens, dataRegistry: "yes" };
    });
  };

  const onShowUserListScreenHandler = () => {
    setDisplayScreens((screens) => {
      return { ...screens, userList: "yes" };
    });
  };

  const onCloseAddAndListMenu = () => {
    setDisplayScreens(() => {
      return { dataRegistry: "none", userList: "none" };
    });
  };

  return (
    <>
      <ButtonHome
        onAddNewUserClick={onAddUserScreenHandler}
        list={usersRegistred}
        onUserListClick={(event) => onShowUserListScreenHandler(event)}
      />
      <ModalDataRegistry
        display={displayScreens.dataRegistry}
        onCloseAction={onCloseAddAndListMenu}
        list={usersRegistred}
        sendUserData={addNewUserHandler}
        cancelButton={onCloseAddAndListMenu}
      />
      <ModalUserList
        display={displayScreens.userList}
        onCloseAction={onCloseAddAndListMenu}
        userList={usersRegistred}
        sentDeletedUser={deletedUser}
      />
    </>
  );
}
