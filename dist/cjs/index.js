'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@material-ui/core/styles');
var core = require('@material-ui/core');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/createClass'));
var axios = _interopDefault(require('axios'));
var querystring = _interopDefault(require('querystring'));
var format = _interopDefault(require('string-format'));

var useGameCollection = function useGameCollection(collection) {
  var _React$useState = React__default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gameList = _React$useState2[0],
      setGameList = _React$useState2[1];

  var fetchData = function fetchData() {
    var result, data;
    return _regeneratorRuntime.async(function fetchData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (collection) {
              _context.next = 4;
              break;
            }

            setGameList([]);
            _context.next = 9;
            break;

          case 4:
            _context.next = 6;
            return _regeneratorRuntime.awrap(collection.getItems());

          case 6:
            result = _context.sent;
            data = result.data;

            if (data !== undefined && data.length) {
              result.data.forEach(function (game) {
                var parts = game.url.split("/");
                game.id = parts[parts.length - 2];
              });
              setGameList(result.data);
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  React__default.useEffect(function () {
    fetchData();
  }, [collection]);
  return gameList;
};

var context = {
  url: null,
  header: null
};

var useCard = function useCard(item) {
  var _React$useState = React__default.useState(context),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gameContext = _React$useState2[0],
      setGameContext = _React$useState2[1];

  var updateData = function updateData() {
    var dataContext = {
      url: item.assetList[0].name,
      header: item.title
    };
    setGameContext(dataContext);
  };

  React__default.useEffect(function () {
    if (item != undefined) updateData();
  }, [item]);
  return gameContext;
};

var DEFAULT_AMOUNT = 5;
var DEFAULT_PAGE = 1;

var GameCollectionRSS =
/*#__PURE__*/
function () {
  function GameCollectionRSS(url, config) {
    _classCallCheck(this, GameCollectionRSS);

    var _url$split = url.split("?"),
        _url$split2 = _slicedToArray(_url$split, 2),
        basicUrl = _url$split2[0],
        query = _url$split2[1];

    query = querystring.parse(query);
    query.amount = query.amount || DEFAULT_AMOUNT;
    query.page = query.page || DEFAULT_PAGE;
    this.basicUrl = basicUrl;
    this.query = query;
    this.config = config;
  }

  _createClass(GameCollectionRSS, [{
    key: "getItems",
    value: function getItems() {
      var url = this.basicUrl + "?" + querystring.stringify(this.query);
      return axios.get(url);
    }
  }]);

  return GameCollectionRSS;
}();

var useGameCollectionRSS = function useGameCollectionRSS(config) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      rss = _useState2[0],
      setRSS = _useState2[1];

  React.useEffect(function () {
    var appliedConfig = {
      company: config.company || "All",
      collection: config.collection || "all",
      category: config.category || "all",
      type: config.type || "all",
      amount: config.amount || "100",
      mobile: config.mobile || "all",
      rewarded: config.rewarded || "all",
      title: config.title || config.category
    };
    var url = config.url || "/proxy/rss/api/v1.0/rss/{company}/?collection={collection}&categories={category}&type={type}&mobile={mobile}&rewarded={rewarded}&format=json&amount={amount}";
    url = format(url, appliedConfig);
    appliedConfig.url = appliedConfig.url;
    setRSS(new GameCollectionRSS(url, appliedConfig));
  }, [config]);
  return rss;
};

var useStyles = core.makeStyles(function (theme) {
  return {
    item: {
      color: "white",
      font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      background: "black",
      display: "flex",
      flexDirection: "column",
      maxWidth: "240px",
      position: "relative",
      border: "5px solid black",
      "& > img": {
        width: "100%",
        height: "100%"
      }
    },
    header: {
      background: "radial-gradient(transparent 0%, black 100%)",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  };
});

var Card = function Card(props) {
  var classes = useStyles();
  var item = classes.item,
      image = classes.image,
      header = classes.header;
  var data = props.data;
  var card = useCard(data);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  React.useEffect(function () {
    var url = card.url,
        header = card.header;
    setUrl(url);
    setTitle(header);
  }, [card]);
  return React__default.createElement("div", {
    className: item
  }, React__default.createElement("img", {
    className: image,
    src: url
  }), React__default.createElement("div", {
    className: header
  }, React__default.createElement("h4", null, title)));
};

var useStyles$1 = core.makeStyles(function (theme) {
  return {
    box: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

var List = function List(props) {
  var classes = useStyles$1();
  var box = classes.box;
  var collection = props.collection;
  var list = useGameCollection(collection);
  return React__default.createElement("div", {
    className: box
  }, list.map(function (item, index) {
    return React__default.createElement(Card, {
      data: item,
      key: index
    });
  }));
};

var useStyles$2 = styles.makeStyles(function (theme) {
  return {
    root: {
      overflow: "hidden",
      background: "black",
      width: "100%",
      height: "100%"
    }
  };
});

function Home(props) {
  var classes = useStyles$2();
  var root = classes.root;
  var data = props.data;
  var game = data.game;
  var collection = useGameCollectionRSS(game);
  return React__default.createElement("div", {
    className: root
  }, React__default.createElement(List, {
    collection: collection
  }));
}

exports.Home = Home;
//# sourceMappingURL=index.js.map
