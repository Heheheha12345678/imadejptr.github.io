/**
 * main.js
 * @description - this is the main js file that is constant in every page.
 */

// t gets the theme item that is set by the user, but by default is set to default.
let t = localStorage.getItem("t") || "default";
// then it sets the theme of the page dependent on the value of t.
document.body.setAttribute("t", t);
/**
 * The random games function
 * @description - when clicked will take the user to a random game on the website.
 */
function RandomGame() {
    fetch("<!-- 
          _____                    _____                _____                    _____          
         /\    \                  /\    \              /\    \                  /\    \         
        /::\    \                /::\    \            /::\    \                /::\    \        
        \:::\    \              /::::\    \           \:::\    \              /::::\    \       
         \:::\    \            /::::::\    \           \:::\    \            /::::::\    \      
          \:::\    \          /:::/\:::\    \           \:::\    \          /:::/\:::\    \     
           \:::\    \        /:::/__\:::\    \           \:::\    \        /:::/__\:::\    \    
           /::::\    \      /::::\   \:::\    \          /::::\    \      /::::\   \:::\    \   
  _____   /::::::\    \    /::::::\   \:::\    \        /::::::\    \    /::::::\   \:::\    \  
 /\    \ /:::/\:::\    \  /:::/\:::\   \:::\____\      /:::/\:::\    \  /:::/\:::\   \:::\____\ 
/::\    /:::/  \:::\____\/:::/  \:::\   \:::|    |    /:::/  \:::\____\/:::/  \:::\   \:::|    |
\:::\  /:::/    \::/    /\::/    \:::\  /:::|____|   /:::/    \::/    /\::/   |::::\  /:::|____|
 \:::\/:::/    / \/____/  \/_____/\:::\/:::/    /   /:::/    / \/____/  \/____|:::::\/:::/    / 
  \::::::/    /                    \::::::/    /   /:::/    /                 |:::::::::/    /  
   \::::/    /                      \::::/    /   /:::/    /                  |::|\::::/    /   
    \::/    /                        \::/____/    \::/    /                   |::| \::/____/    
     \/____/                          ~~           \/____/                    |::|  ~|          
                                                                              |::|   |          
                                                                              \::|   |          
                                                                               \:|   |          
                                                                                \|___|          
                                                                                                
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="imadejptr" property="og:title">
  <meta content="The 2nd Iteration of JPTR. With 600+ games, you won't
            have a boring time here" property="og:description">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="shortcut icon" type="image/x-icon"
    href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152753706-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-152753706-1');
  </script>
  <script data-ad-client="ca-pub-6003658983346596" crossorigin="anonymous" async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-6003658983346596",
      enable_page_level_ads: true
    });
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>imadejptr</title>
</head>

<body>
  <abbr title="made by @marcopetrildesigns on ig <3"><img
      src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/logo.png" width="10%"
      style="display: block; margin-left: auto; margin-right: auto;" class="logo-main"></abbr>
  <ul id="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/imadejptr.github.io/games.html">Games</a></li>
    <li><a href="/imadejptr.github.io/apps.html">Apps</a></li>
    <li><a href="/imadejptr.github.io/settings.html">Settings</a></li>
    <li><a href="/imadejptr.github.io/partners.html">Partners</a></li>
    <li><a href="https://forms.gle/csD87Y58jERSKVS7A" target="_blank">Suggestions</a></li>
    <li><a onclick="RandomGame();">Random</a></li>
  </ul>
  <div class="group2">
    <br>
    <h1 id="libtot"></h1>
    <input id="search" placeholder="Search for Games...">
    <br>
    <ul class="list" id="aps"></ul>
  </div>
  <p class="social-footer-menu">
    <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/about.html">About</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/privacy.html">Privacy Policy</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/terms.html">Terms &amp; Conditions</a> // <a class="f-badge"
      style="text-decoration: none;" href="<!-- 
          _____                    _____                _____                    _____          
         /\    \                  /\    \              /\    \                  /\    \         
        /::\    \                /::\    \            /::\    \                /::\    \        
        \:::\    \              /::::\    \           \:::\    \              /::::\    \       
         \:::\    \            /::::::\    \           \:::\    \            /::::::\    \      
          \:::\    \          /:::/\:::\    \           \:::\    \          /:::/\:::\    \     
           \:::\    \        /:::/__\:::\    \           \:::\    \        /:::/__\:::\    \    
           /::::\    \      /::::\   \:::\    \          /::::\    \      /::::\   \:::\    \   
  _____   /::::::\    \    /::::::\   \:::\    \        /::::::\    \    /::::::\   \:::\    \  
 /\    \ /:::/\:::\    \  /:::/\:::\   \:::\____\      /:::/\:::\    \  /:::/\:::\   \:::\____\ 
/::\    /:::/  \:::\____\/:::/  \:::\   \:::|    |    /:::/  \:::\____\/:::/  \:::\   \:::|    |
\:::\  /:::/    \::/    /\::/    \:::\  /:::|____|   /:::/    \::/    /\::/   |::::\  /:::|____|
 \:::\/:::/    / \/____/  \/_____/\:::\/:::/    /   /:::/    / \/____/  \/____|:::::\/:::/    / 
  \::::::/    /                    \::::::/    /   /:::/    /                 |:::::::::/    /  
   \::::/    /                      \::::/    /   /:::/    /                  |::|\::::/    /   
    \::/    /                        \::/____/    \::/    /                   |::| \::/____/    
     \/____/                          ~~           \/____/                    |::|  ~|          
                                                                              |::|   |          
                                                                              \::|   |          
                                                                               \:|   |          
                                                                                \|___|          
                                                                                                
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="imadejptr" property="og:title">
  <meta content="The 2nd Iteration of JPTR. With 600+ games, you won't
            have a boring time here" property="og:description">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="shortcut icon" type="image/x-icon"
    href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152753706-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-152753706-1');
  </script>
  <script data-ad-client="ca-pub-6003658983346596" crossorigin="anonymous" async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-6003658983346596",
      enable_page_level_ads: true
    });
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>imadejptr</title>
</head>

<body>
  <abbr title="made by @marcopetrildesigns on ig <3"><img
      src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/logo.png" width="10%"
      style="display: block; margin-left: auto; margin-right: auto;" class="logo-main"></abbr>
  <ul id="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/imadejptr.github.io/games.html">Games</a></li>
    <li><a href="/imadejptr.github.io/apps.html">Apps</a></li>
    <li><a href="/imadejptr.github.io/settings.html">Settings</a></li>
    <li><a href="/imadejptr.github.io/partners.html">Partners</a></li>
    <li><a href="https://forms.gle/csD87Y58jERSKVS7A" target="_blank">Suggestions</a></li>
    <li><a onclick="RandomGame();">Random</a></li>
  </ul>
  <div class="group2">
    <br>
    <h1 id="libtot"></h1>
    <input id="search" placeholder="Search for Games...">
    <br>
    <ul class="list" id="aps"></ul>
  </div>
  <p class="social-footer-menu">
    <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/about.html">About</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/privacy.html">Privacy Policy</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/terms.html">Terms &amp; Conditions</a> // <a class="f-badge"
      style="text-decoration: none;" href="/logs.html">Logs</a> // <a class="f-badge" style="text-decoration: none;"
      href="/imadejptr.github.io/dmca.html">DMCA</a> // <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/sites.html">Mirror Sites</a> //
    <a>All games are made from other publishers</a> // <span>imadejptr 2022-2024</span>
  </p>
</body>
<script src="/imadejptr.github.io/assets/js/main.js"></script>
<script src="/imadejptr.github.io/assets/js/jquery-3.7.1.min.js"></script>
<script>
  const params = new URLSearchParams(window.location.search);
  let cum = params.get("sys");
  const data = fetch("/imadejptr.github.io/assets/json/apps.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      systems(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function systems(data) {
    data.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
    $(document).ready(function () {
      $.ajaxSetup({
        cache: false
      });
      $('#search').keyup(function () {
        $('#gs').html('');
        $('#name').val('');
        let searchField = $('#search').val();
        let expression = new RegExp(searchField, "i");
        $.each(data, function (key, valu) {
          if (valu.name.search(expression) != -1) {
            $('#gs').append("<li><a href=/imadejptr.github.io/go.html?id=" +
              valu.id +
              ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
              valu.id +
              '.' +
              valu.img +
              '" data-loaded="true"><div class="badge">' +
              valu.badge +
              '</div><span class="box-title">' +
              valu.name +
              "</span></a></li>");
          }
        });
      });
    });
    let mainContainer = document.getElementById("aps");
    for (let i = 0; i <= data.length; i++) {
      let div = document.createElement("li");
      div.innerHTML =
        "<a href=/imadejptr.github.io/go2.html?id=" +
        data[i].id +
        ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
        data[i].img +
        '" data-loaded="true"><div class="badge">' +
        data[i].badge +
        '</div><span class="box-title">' +
        data[i].name +
        "</span></a>";
      mainContainer.appendChild(div);
      count();
    }

    function count() {
      document.getElementById("libtot").innerHTML = "There are " + data.length + " apps to choose from!";
    }
  }
</script>

</html>


<!-- 
          _____                    _____                _____                    _____          
         /\    \                  /\    \              /\    \                  /\    \         
        /::\    \                /::\    \            /::\    \                /::\    \        
        \:::\    \              /::::\    \           \:::\    \              /::::\    \       
         \:::\    \            /::::::\    \           \:::\    \            /::::::\    \      
          \:::\    \          /:::/\:::\    \           \:::\    \          /:::/\:::\    \     
           \:::\    \        /:::/__\:::\    \           \:::\    \        /:::/__\:::\    \    
           /::::\    \      /::::\   \:::\    \          /::::\    \      /::::\   \:::\    \   
  _____   /::::::\    \    /::::::\   \:::\    \        /::::::\    \    /::::::\   \:::\    \  
 /\    \ /:::/\:::\    \  /:::/\:::\   \:::\____\      /:::/\:::\    \  /:::/\:::\   \:::\____\ 
/::\    /:::/  \:::\____\/:::/  \:::\   \:::|    |    /:::/  \:::\____\/:::/  \:::\   \:::|    |
\:::\  /:::/    \::/    /\::/    \:::\  /:::|____|   /:::/    \::/    /\::/   |::::\  /:::|____|
 \:::\/:::/    / \/____/  \/_____/\:::\/:::/    /   /:::/    / \/____/  \/____|:::::\/:::/    / 
  \::::::/    /                    \::::::/    /   /:::/    /                 |:::::::::/    /  
   \::::/    /                      \::::/    /   /:::/    /                  |::|\::::/    /   
    \::/    /                        \::/____/    \::/    /                   |::| \::/____/    
     \/____/                          ~~           \/____/                    |::|  ~|          
                                                                              |::|   |          
                                                                              \::|   |          
                                                                               \:|   |          
                                                                                \|___|          
                                                                                                
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="imadejptr" property="og:title">
  <meta content="The 2nd Iteration of JPTR. With 600+ games, you won't
            have a boring time here" property="og:description">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="shortcut icon" type="image/x-icon"
    href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152753706-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-152753706-1');
  </script>
  <script data-ad-client="ca-pub-6003658983346596" crossorigin="anonymous" async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-6003658983346596",
      enable_page_level_ads: true
    });
  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>imadejptr</title>
</head>

<body>
  <abbr title="made by @marcopetrildesigns on ig <3"><img
      src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/logo.png" width="10%"
      style="display: block; margin-left: auto; margin-right: auto;" class="logo-main"></abbr>
  <ul id="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/imadejptr.github.io/games.html">Games</a></li>
    <li><a href="/imadejptr.github.io/apps.html">Apps</a></li>
    <li><a href="/imadejptr.github.io/settings.html">Settings</a></li>
    <li><a href="/imadejptr.github.io/partners.html">Partners</a></li>
    <li><a href="https://forms.gle/csD87Y58jERSKVS7A" target="_blank">Suggestions</a></li>
    <li><a onclick="RandomGame();">Random</a></li>
  </ul>
  <div class="group2">
    <br>
    <h1 id="libtot"></h1>
    <input id="search" placeholder="Search for Games...">
    <br>
    <ul class="list" id="aps"></ul>
  </div>
  <p class="social-footer-menu">
    <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/about.html">About</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/privacy.html">Privacy Policy</a> // <a class="f-badge"
      style="text-decoration: none;" href="/imadejptr.github.io/terms.html">Terms &amp; Conditions</a> // <a class="f-badge"
      style="text-decoration: none;" href="/logs.html">Logs</a> // <a class="f-badge" style="text-decoration: none;"
      href="/imadejptr.github.io/dmca.html">DMCA</a> // <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/sites.html">Mirror Sites</a> //
    <a>All games are made from other publishers</a> // <span>imadejptr 2022-2024</span>
  </p>
</body>
<script src="/imadejptr.github.io/assets/js/main.js"></script>
<script src="/imadejptr.github.io/assets/js/jquery-3.7.1.min.js"></script>
<script>
  const params = new URLSearchParams(window.location.search);
  let cum = params.get("sys");
  const data = fetch("/imadejptr.github.io/assets/json/apps.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      systems(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function systems(data) {
    data.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
    $(document).ready(function () {
      $.ajaxSetup({
        cache: false
      });
      $('#search').keyup(function () {
        $('#gs').html('');
        $('#name').val('');
        let searchField = $('#search').val();
        let expression = new RegExp(searchField, "i");
        $.each(data, function (key, valu) {
          if (valu.name.search(expression) != -1) {
            $('#gs').append("<li><a href=/imadejptr.github.io/go.html?id=" +
              valu.id +
              ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
              valu.id +
              '.' +
              valu.img +
              '" data-loaded="true"><div class="badge">' +
              valu.badge +
              '</div><span class="box-title">' +
              valu.name +
              "</span></a></li>");
          }
        });
      });
    });
    let mainContainer = document.getElementById("aps");
    for (let i = 0; i <= data.length; i++) {
      let div = document.createElement("li");
      div.innerHTML =
        "<a href=/imadejptr.github.io/go2.html?id=" +
        data[i].id +
        ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
        data[i].img +
        '" data-loaded="true"><div class="badge">' +
        data[i].badge +
        '</div><span class="box-title">' +
        data[i].name +
        "</span></a>";
      mainContainer.appendChild(div);
      count();
    }

    function count() {
      document.getElementById("libtot").innerHTML = "There are " + data.length + " apps to choose from!";
    }
  }
</script>

</html>


/imadejptr.github.io/logs.html">Logs</a> // <a class="f-badge" style="text-decoration: none;"
      href="/imadejptr.github.io/dmca.html">DMCA</a> // <a class="f-badge" style="text-decoration: none;" href="/imadejptr.github.io/sites.html">Mirror Sites</a> //
    <a>All games are made from other publishers</a> // <span>imadejptr 2022-2024</span>
  </p>
</body>
<script src="/imadejptr.github.io/assets/js/main.js"></script>
<script src="/imadejptr.github.io/assets/js/jquery-3.7.1.min.js"></script>
<script>
  const params = new URLSearchParams(window.location.search);
  let cum = params.get("sys");
  const data = fetch("/imadejptr.github.io/assets/json/apps.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      systems(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  function systems(data) {
    data.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
    $(document).ready(function () {
      $.ajaxSetup({
        cache: false
      });
      $('#search').keyup(function () {
        $('#gs').html('');
        $('#name').val('');
        let searchField = $('#search').val();
        let expression = new RegExp(searchField, "i");
        $.each(data, function (key, valu) {
          if (valu.name.search(expression) != -1) {
            $('#gs').append("<li><a href=/imadejptr.github.io/go.html?id=" +
              valu.id +
              ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
              valu.id +
              '.' +
              valu.img +
              '" data-loaded="true"><div class="badge">' +
              valu.badge +
              '</div><span class="box-title">' +
              valu.name +
              "</span></a></li>");
          }
        });
      });
    });
    let mainContainer = document.getElementById("aps");
    for (let i = 0; i <= data.length; i++) {
      let div = document.createElement("li");
      div.innerHTML =
        "<a href=/imadejptr.github.io/go2.html?id=" +
        data[i].id +
        ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
        data[i].img +
        '" data-loaded="true"><div class="badge">' +
        data[i].badge +
        '</div><span class="box-title">' +
        data[i].name +
        "</span></a>";
      mainContainer.appendChild(div);
      count();
    }

    function count() {
      document.getElementById("libtot").innerHTML = "There are " + data.length + " apps to choose from!";
    }
  }
</script>

</html>


/imadejptr.github.io/assets/json/gs.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            rg(data);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the rg function
     * @description - It takes the data from gs.json and helps send the user to the randomly chosen game.
     * @param {*} data - the data that is being passed through.
     */
    function rg(data) {
        // rand takes the data length and generates a random number from said data length
        // example: if the length is 690, then it would put out any number between 1-690
        let rand = Math.floor(Math.random() * (data.length + 1));
        // then it sends the user to the id of the random value that is generated from rand.
        location.href =
            "/imadejptr.github.io/go.html?id=" + data[rand].id;
    }

}

/**
 * This is the 1st easter egg on the site.
 * This is the freep0rn function
 * @description - if entered in the console, will change the theme into the "clown" theme. With a greeting from Oli The Cop
 * I made this because of the unbelievable amount of horny bastards that wanted me to put porn onto the site, that will never happen.
 */
function freep0rn() {
    localStorage.setItem("t", "clown");
    document.body.setAttribute("t", "clown");
    document.body.style = "";
    localStorage.removeItem("theme_color");
    console.log("                                                                \n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                      \n░░░░░░          ▒▒▒▒▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒                  \n░░░░░░░░░░░░    ▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒                \n░░░░░░░░░░░░  ░░  ▒▒▒▒░░░░░░░░░░░░░░░░░░▒▒▒▒                  \n░░░░░░░░░░░░░░░░    ░░██████████████████░░                    \n░░░░░░░░░░░░░░░░  ░░██████████████████████░░                  \n░░░░░░░░░░░░░░    ░░░░░░██████████████░░░░░░                  \n░░░░░░░░░░░░░░░░  ░░░░▒▒░░▒▒░░░░░░▒▒░░▒▒░░░░                  \n░░░░░░░░░░░░░░░░    ░░░░▒▒░░▒▒▒▒▒▒░░▒▒░░░░                    \n░░░░░░░░░░░░▒▒▒▒▒▒  ░░▒▒░░░░░░░░░░░░░░▒▒░░▒▒▒▒▒▒▒▒▒▒          \n░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    \n  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒░░▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  \n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    \n      ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒      \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████  \n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████\n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░▒▒▒▒░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████\n    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████  \n      ▒▒██████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████████▒▒        \n      ██████████████████        ████████████████████        \n      ██████████████████        ████████████████████        \n      ██████████████████        ████████████████████        \n    ██████████████████            ████████████████████      \n  ████████████████████            ██████████████████████    \n                                                            ");
    console.log("

/**
 * This is the 2nd easter egg on the site.
 * This is the luma function
 * @description - if entered in the console, will change the theme to the "luma" theme and a brief history of the site.
 * Luma used to be the original name of the site, so I wanted to dedicate a neat easter egg to pay homage to the start of the site.
 */
function luma() {
    localStorage.setItem("t", "luma");
    document.body.setAttribute("t", "luma");
    document.body.style = "";
    localStorage.removeItem("theme_color");
    console.log("%cHISTORY!:", "color: white; font-size:36px;")
    console.log("%cLUMA was the code name for a project that I was working on during my last year in high school at the start of 2022. Didn't have much purpose but to test out how url values could affect the values shown on the page. This project would later become what is known now as imadejptr.", "color: pink; font-size:24px;");
    console.log("%cThis theme was made to pay homage to the original goal of the website and how it changed from what it was then and what it is now. The website is still up on https://jptr.glitch.me", "color: lightgreen; font-size:24px;")
}

/**
 * This is one of three json fetchers.
 * These three functions represent the newest games, best games and players choice.
 * Bobbo, Coopie, and Chirpy represent my cats from past and present, so theres that.
 * The if statement below checks to see if the body of the html page contains "cats", if so then the functions would run.
 * This is done so that there isn't a huge amount of errors because of it not being used in other pages.
 */
if (document.body.classList.contains("cats")) {
    const bobbo = fetch("/imadejptr.github.io/assets/json/twothree.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (bobbo) {
            hot(bobbo);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the hot function
     * @description - this is the function that displays the hottest/best games on the website.
     * @param {*} bobbo - represents the data being passed through
     */
    function hot(bobbo) {
        let hotG = document.getElementById("hot");
        // originally it would be 15, but for this special update it will 30.
        for (let i = 0; i < 100; i++) {
            let div = document.createElement("li");
            div.innerHTML =
                "<a href=/imadejptr.github.io/go.html?id=" +
                bobbo[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                bobbo[i].id +
                '.' +
                bobbo[i].img +
                '" data-loaded="true"><div class="badge">' +
                bobbo[i].badge +
                '</div><span class="box-title">' +
                bobbo[i].name +
                "</span></a>";
            hotG.appendChild(div);
        }
    }

    const coopie = fetch("/imadejptr.github.io/assets/json/gs.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (coopie) {
            news(coopie);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the new games function
     * @description - this function displays the newest games that are added to the website.
     * @param {*} coopie - represents the data being passed through
     */

    function news(coopie) {
        coopie.sort(function (a, b) {
            return b.id - a.id
        })
        let newG = document.getElementById("new");
        for (let i = 0; i < 15; i++) {
            let div = document.createElement("li");
            if (coopie[i].new == "true") {
                div.className = "new-class";
                div.innerHTML =
                    "<a href=/imadejptr.github.io/go.html?id=" +
                    coopie[i].id +
                    ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                    coopie[i].id +
                    '.' +
                    coopie[i].img +
                    '" data-loaded="true"><div class="badge">' +
                    coopie[i].badge +
                    '</div><div class="new-badge">NEW!' +
                    '</div><span class="box-title">' +
                    coopie[i].name +
                    "</span></a>";
                newG.appendChild(div);
            } else {
                div.innerHTML =
                    "<a href=/imadejptr.github.io/go.html?id=" +
                    coopie[i].id +
                    ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                    coopie[i].id +
                    '.' +
                    coopie[i].img +
                    '" data-loaded="true"><div class="badge">' +
                    coopie[i].badge +
                    '</div><span class="box-title">' +
                    coopie[i].name +
                    "</span></a>";
                newG.appendChild(div);
            }
        }
    }

    const chirpy = fetch("/imadejptr.github.io/assets/json/pc.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (chirpy) {
            pc(chirpy);
        })
        .catch(function (err) {
            console.log("error: " + err);
        });
    /**
     * This is the players choice function
     * @description - this function displays whatever games that the chosen discord user plays on imadejptr.
     * if YOU 🫵 want to show off your favorite games, hate to plug in a js doc but 👉 https://dsc.gg/imj
     * @param {*} chirpy - represents the data being passed through
     */
    function pc(chirpy) {
        let pcG = document.getElementById("pc");
        for (let i = 0; i <= chirpy.length; i++) {
            let div = document.createElement("li");
            div.innerHTML =
                "<a href=/imadejptr.github.io/go.html?id=" +
                chirpy[i].id +
                ' class="box"><img src="https://cdn.glitch.global/a65741ca-e4a3-4b9c-9f87-1568672f0160/' +
                chirpy[i].id +
                '.' +
                chirpy[i].img +
                '" data-loaded="true"><div class="badge">' +
                chirpy[i].badge +
                '</div><span class="box-title">' +
                chirpy[i].name +
                "</span></a>";
            pcG.appendChild(div);
        }
    }
} else {
    console.log("no cats :(") // this only displays if the page doesn't contain cats.
}


let slideIndex = 1;
let myTimer;
let slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function () {
            plusSlides(n + 2)
        }, 4000);
    } else {
        myTimer = setInterval(function () {
            plusSlides(n + 1)
        }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(n + 1)
    }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(slideIndex)
    }, 4000);
}
