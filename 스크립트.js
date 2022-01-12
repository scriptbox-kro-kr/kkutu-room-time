
function foo() {
      const curr = new Date();
      const hour = curr.getHours();
      const minutes = curr.getMinutes();
      const seconds = curr.getSeconds();
      document.getElementById("room-title").value =  `현재시간=${hour}:${minutes}:${seconds}`;
      document.getElementById('room-ok').click();
      setTimeout(fo, 50);
};

function fo() {
      document.getElementById('SetRoomBtn').click();
      setTimeout(foo, 50);
};

foo();
