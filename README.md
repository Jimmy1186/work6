# Frontend練習網站的題目 

要求如下:
- View the optimal layout depending on their device's screen size 
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge


後來做到一半覺得重複的部分很多，付款選擇區阿、按鈕，而且在不同的狀態下付費區要變化就不能寫死，所以就用REACT來寫。

主要功能就是按多少錢的按鈕之後人數、金額、產品所剩會隨著變化。
不過這次因為有些變數橫跨1個以上的節點所以props部分是用useContext來傳到末節點，剩下就用傳統的直接往下傳。
