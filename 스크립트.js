
function foo() {
      const curr = new Date();
      const hour = curr.getHours();
      const minutes = curr.getMinutes();
      const seconds = curr.getSeconds();
      document.getElementById("room-title").value =  `íėŽėę°=${hour}:${minutes}:${seconds}`;
      document.getElementById('room-ok').click();
      setTimeout(fo, 50);
};

function fo() {
      document.getElementById('SetRoomBtn').click();
      setTimeout(foo, 50);
};

foo();
