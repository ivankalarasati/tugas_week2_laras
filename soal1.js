const userDB = {
  username: "Joko",
  password: "rahasia",
  role: "admin",
};

const loginUser = (inputUsername, inputPassword, cekrole) => {
  setTimeout(() => {
    if (
      inputUsername === userDB.username &&
      inputPassword === userDB.password
    ) {
      console.log("Berhasil login");
      cekrole(userDB);
    } else {
      console.log("Gagal login");
    }
  }, 500);
};

const getRole = (user, cekmenu) => {
  setTimeout(() => {
    if (user.role) {
      cekmenu(user.role);
    } else {
      console.log("Gagal mengambil role");
    }
  }, 500);
};
const getMenu = (role, redirect) => {
  setTimeout(() => {
    let menu = "";
    if (role === "admin") {
      menu = "database admin";
    } else {
      menu = "database";
    }
    redirect(menu);
  }, 500);
};

loginUser("Joko", "rahasia", (user) => {
  getRole(user, (role) => {
    getMenu(role, (menu) => {
      console.log(`Masuk menu ${menu}`);
    });
  });
});
