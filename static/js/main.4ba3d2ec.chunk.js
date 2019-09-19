(window["webpackJsonpfoodie-frontend"]=window["webpackJsonpfoodie-frontend"]||[]).push([[0],{35:function(e,t,a){},54:function(e,t,a){e.exports=a(93)},59:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),l=(a(35),a(5)),i=a(6),c=a(8),u=a(7),h=a(9),m=(a(59),a(20)),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user_name:"",password:""},a.handleInputChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),fetch("https://flatiron-foodie.herokuapp.com/tokens",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a.state)}).then(function(e){return e.json()}).then(function(e){e.errors||(localStorage.user_id=e.user_id,localStorage.clickedUser=e.user_id,localStorage.token=e.token,a.props.history.push("/home"))})},a.handleRegisterClick=function(){a.props.history.push("/register")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return localStorage.token&&this.props.history.push("/home"),r.a.createElement("div",{className:"login-page"},r.a.createElement("img",{src:"images/foodie-logo.png",alt:"logo"}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.user_name,type:"text",placeholder:"User Name",name:"user_name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.password,type:"password",placeholder:"Password",name:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"submit"})),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleRegisterClick},"Register"))}}]),t}(r.a.Component),p=a(17),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){localStorage.restaurant_id=e,a.props.history.push("/show")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home-each-image"},r.a.createElement("img",{alt:this.props.restaurant.name,onClick:function(){return e.handleClick(e.props.restaurant.id)},className:"each-home-image",src:this.props.restaurant.image_url}),r.a.createElement("div",{className:"image-caption"},this.props.restaurant.name.slice(0,20)))}}]),t}(r.a.Component),g=a(97),b=a(96),y=a(98),E=a(50),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleSearchInput=function(e){a.setState({searchTerm:e.target.value})},a.handleSearchSubmit=function(e){e.preventDefault(),a.props.history.push("/home"),""!==a.state.searchTerm&&a.props.handleSearchRestaurant(a.state.searchTerm)},a.handleHomeButton=function(){a.props.history.push("/home"),a.props.handleSearchRestaurant("food")},a.handleFriendlistClick=function(){a.props.history.push("/friendlist")},a.handleProfileClick=function(){localStorage.clickedUser=localStorage.user_id,a.props.history.push("/profile")},a.handleLogout=function(){localStorage.clear(),a.props.history.push("/")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement(g.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(b.a.Link,{onClick:this.handleHomeButton},"Foodie"),r.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{onClick:this.handleProfileClick,href:"#profile"},"My Profile"),r.a.createElement(b.a.Link,{onClick:this.handleFriendlistClick,href:"#friendlist"},"Friendlist"),r.a.createElement("button",{onClick:this.handleLogout},"Logout")),r.a.createElement(y.a,{onSubmit:this.handleSearchSubmit,inline:!0},r.a.createElement(E.a,{type:"text",onChange:this.handleSearchInput,value:this.state.searchTerm,placeholder:"Search",className:"mr-sm-2"}),r.a.createElement("button",null,"Search")))))}}]),t}(r.a.Component),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={likedRestaurants:[]},a.handleClick=function(e){localStorage.restaurant_id=e,a.props.history.push("/show")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://flatiron-foodie.herokuapp.com/getFavRestaurants/".concat(localStorage.user_id)).then(function(e){return e.json()}).then(function(t){e.setState({likedRestaurants:t})})}},{key:"render",value:function(){var e,t=this;return this.state.likedRestaurants.length>0&&(e=this.state.likedRestaurants.map(function(e){return r.a.createElement("li",{onClick:function(){return t.handleClick(e.real_id)}},e.name," ")})),r.a.createElement("div",{className:"side-bar"},r.a.createElement("h4",null,"Your Favorite Restaurants"),r.a.createElement("br",null),r.a.createElement("br",null),e)}}]),t}(r.a.Component),S=a(25),j=a.n(S),O=function(e){var t=e.text,a=e.restaurant_id,n=e.history;return r.a.createElement("div",{className:"marker-gmap",onClick:function(e){localStorage.restaurant_id=a,n.push("/show")}},t)},C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;this.props.AllRestaurant&&this.props.coordinates&&(e={lat:40.700862,lng:-73.987472});var a=this.props.AllRestaurant.map(function(e){return r.a.createElement(O,{lat:e.coordinates.latitude,lng:e.coordinates.longitude,text:"\ud83d\udccd".concat(e.name),restaurant_id:e.id,history:t.props.history})});return r.a.createElement("div",{className:"home-map",style:{height:"70vh",width:"80vw"}},e?r.a.createElement(j.a,{bootstrapURLKeys:{key:"AIzaSyA2widfpUax2XsT7G3UXL7k5RvqHtXNDZ0"},defaultCenter:this.props.coordinates,defaultZoom:17.2},a):null)}}]),t}(n.Component),R=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){fetch("https://flatiron-foodie.herokuapp.com/getFavRestaurants/2").then(function(e){return e.json()})}},{key:"render",value:function(){var e=this,t=this.props.AllRestaurant.map(function(t){return r.a.createElement(f,{history:e.props.history,restaurant:t})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{handleSearchRestaurant:this.props.handleSearchRestaurant,history:this.props.history}),r.a.createElement("div",{className:"home-container"},r.a.createElement(C,{coordinates:this.props.coordinates,AllRestaurant:this.props.AllRestaurant,history:this.props.history}),r.a.createElement("div",{className:"home-images"},localStorage.token?t:"LOGIN BUDDY")),r.a.createElement(v,{history:this.props.history}))}}]),t}(r.a.Component),w=a(53),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleDeleteButton=function(e){a.props.handleDeleteComment(e)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.comments.length>0&&(e=this.props.comments.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null," ",r.a.createElement("span",null," ",e.user.name,": ")," ",e.context,parseInt(e.user.id)===parseInt(localStorage.user_id)?r.a.createElement("button",{className:"delete-comment-button",onClick:function(){return t.handleDeleteButton(e)}},"x"):null))})),r.a.createElement("div",{className:"restaurant-comments"},r.a.createElement("div",{style:{textDecoration:"underline"}},"Comments for this Restaurant:"),e)}}]),t}(r.a.Component),A=function(e){var t=e.text;return r.a.createElement("div",null,t)},N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.props.coordinates&&(e={lat:this.props.coordinates.latitude,lng:this.props.coordinates.longitude}),r.a.createElement("div",{className:"each-map",style:{height:"400px",width:"400px"}},e?r.a.createElement(j.a,{bootstrapURLKeys:{key:"AIzaSyA2widfpUax2XsT7G3UXL7k5RvqHtXNDZ0"},defaultCenter:e,defaultZoom:this.props.zoom},r.a.createElement(A,{lat:e.lat,lng:e.lng,text:"\ud83d\udccd"}),r.a.createElement(A,{lat:e.lat+.1,lng:e.lng+.1,text:"\ud83d\udccd"})):null)}}]),t}(n.Component);N.defaultProps={center:{lat:59.95,lng:30.33},zoom:17};var L=N,T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.usersLiked&&(e=this.props.usersLiked.map(function(e){return r.a.createElement("span",null,r.a.createElement("button",{className:"restaurant-user-button",onClick:function(){localStorage.clickedUser=e.id,t.props.history.push("/profile")}},e.name))})),r.a.createElement("div",{style:{textDecoration:"underline"}},"Users who liked this restaurant:",e)}}]),t}(r.a.Component);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={restaurant:[],liked:!1,commentText:"",comments:[],usersLiked:[]},a.handleDeleteComment=function(e){fetch("https://flatiron-foodie.herokuapp.com/deleteComment/".concat(e.id),{method:"DELETE"}).then(function(){return a.fetchCommentFromBackend()})},a.fetchCommentFromBackend=function(){fetch("https://flatiron-foodie.herokuapp.com/getComments",{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:localStorage.token},body:JSON.stringify({user_id:localStorage.user_id,restaurant_id:localStorage.restaurant_id})}).then(function(e){return e.json()}).then(function(e){e.error||a.setState({comments:e})}).catch(console.log("error"))},a.handleUsersLikeList=function(){fetch("https://flatiron-foodie.herokuapp.com/restaurants/".concat(localStorage.restaurant_id,"/users"),{method:"GET",headers:{Accepts:"Application/json","Content-Type":"application/json",Authorization:localStorage.token}}).then(function(e){return e.json()}).then(function(e){e.error||a.setState({usersLiked:e})})},a.handleLike=function(){fetch("https://flatiron-foodie.herokuapp.com/addlike",{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:localStorage.token},body:JSON.stringify({user_id:localStorage.user_id,restaurant_id:localStorage.restaurant_id,restaurant_name:a.state.restaurant.name})}).then(function(){a.handleUsersLikeList(),a.setState({liked:!a.state.liked})})},a.handleCommentSubmit=function(){fetch("https://flatiron-foodie.herokuapp.com/addComments",{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:localStorage.token},body:JSON.stringify({user_id:localStorage.user_id,restaurant_id:localStorage.restaurant_id,context:a.state.commentText,restaurant_name:a.state.restaurant.name})}).then(function(e){return e.json()}).then(function(e){a.state.comments.length>0?a.setState({comments:[].concat(Object(w.a)(a.state.comments),[e])}):a.setState({comments:[e]})}),a.setState({commentText:""})},a.handleCommentTypeChange=function(e){a.setState({commentText:e.target.value})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://flatiron-foodie.herokuapp.com/getRestaurantDetail/".concat(localStorage.restaurant_id),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:localStorage.token},body:JSON.stringify({user_id:localStorage.user_id})}).then(function(e){return e.json()}).then(function(t){e.setState({liked:t.liked,restaurant:D({},t)}),e.fetchCommentFromBackend()}),this.handleUsersLikeList()}},{key:"render",value:function(){var e,t,a=this.state.restaurant,n=a.name,o=a.categories,s=a.rating,l=a.price,i=a.location,c=a.display_phone;return 0!==this.state.restaurant.length&&(e=o.map(function(e){return r.a.createElement("span",null,"~",e.title,"~ ")}),t=i.display_address.join(", ")),r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{handleSearchRestaurant:this.props.handleSearchRestaurant,history:this.props.history}),r.a.createElement("div",{className:"restaurant-detail"},r.a.createElement("img",{alt:this.state.restaurant.name,className:"restaurant-detail-image",src:this.state.restaurant.image_url}),r.a.createElement("div",{className:"map-and-content"},r.a.createElement("div",{className:"restaurant-detail-content"},r.a.createElement("h4",null,n),r.a.createElement("p",null,"Address: ",t),r.a.createElement("p",null,"Phone: ",c," "),r.a.createElement("p",null,"Rating: ",s),r.a.createElement("p",null,l),r.a.createElement("p",null,"Categories: ",e)),r.a.createElement("div",null,r.a.createElement("div",{class:"like-content"},r.a.createElement("button",{onClick:this.handleLike,class:"btn-secondary like-review"},r.a.createElement("i",{class:"fa fa-heart","aria-hidden":"true"})," ",this.state.liked?"Unlike":"like"))),r.a.createElement("div",{className:"restaurant-map"},r.a.createElement(L,{coordinates:this.state.restaurant.coordinates}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{history:this.props.history,usersLiked:this.state.usersLiked}),r.a.createElement(_,{handleDeleteComment:this.handleDeleteComment,comments:this.state.comments}),r.a.createElement("label",null,"Add a Review: "),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("textarea",{value:this.state.commentText,onChange:this.handleCommentTypeChange})),r.a.createElement("br",null),r.a.createElement("div",null," ",r.a.createElement("input",{className:"comment-submit",type:"submit",onClick:this.handleCommentSubmit}))))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={friendList:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://flatiron-foodie.herokuapp.com/following/".concat(localStorage.user_id)).then(function(e){return e.json()}).then(function(t){e.setState({friendList:t})})}},{key:"render",value:function(){var e=this,t=this.state.friendList.map(function(t){return r.a.createElement("li",{onClick:function(){localStorage.clickedUser=t.id,e.props.history.push("/profile")}},t.name)});return r.a.createElement("div",{className:"friend-list"},r.a.createElement(k,{handleSearchRestaurant:this.props.handleSearchRestaurant,history:this.props.history}),r.a.createElement("div",{className:"friend-list-content"},r.a.createElement("h2",{style:{textDecoration:"underline"}},"My friends"),t))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",user_name:"",password:""},a.handleInputChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),fetch("https://flatiron-foodie.herokuapp.com/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a.state)}).then(function(e){return e.json()}).then(function(e){e.errors||(localStorage.setItem("token",e.token),localStorage.user_id=e.user_id,a.props.history.push("/"))})},a.handleLoginClick=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"register-page"},r.a.createElement("img",{src:"images/foodie-logo.png",alt:"logo"}),r.a.createElement("h2",null,"Create an Account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.name,type:"text",placeholder:"Name",name:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.user_name,type:"text",placeholder:"User Name",name:"user_name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleInputChange,value:this.state.password,type:"password",placeholder:"Password",name:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"submit"})),r.a.createElement("br",null),r.a.createElement("h3",null,"Already Have an Account?"),r.a.createElement("button",{onClick:this.handleLoginClick},"Login"))}}]),t}(r.a.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:[],friends:!1,current_id:null},a.fetchUserFromBackend=function(){fetch("https://flatiron-foodie.herokuapp.com/users/".concat(localStorage.user_id,"/").concat(localStorage.clickedUser),{method:"GET",headers:{"Content-Type":"application/json",Accepts:"application/json",Authorization:localStorage.token}}).then(function(e){return e.json()}).then(function(e){a.setState({user:e,current_id:e.id})})},a.handleClick=function(e){localStorage.restaurant_id=e,a.props.history.push("/show")},a.handleAddFriend=function(){a.setState({friends:!0}),fetch("https://flatiron-foodie.herokuapp.com/users/".concat(localStorage.user_id,"/addFriend/").concat(localStorage.clickedUser)).then(function(e){return e.json})},a.handleDeleteFriend=function(){a.setState({friends:!1}),fetch("https://flatiron-foodie.herokuapp.com/users/".concat(localStorage.user_id,"/deleteFriend/").concat(localStorage.clickedUser),{method:"DELETE"}).then(function(e){return e.json})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUserFromBackend(),this.fetchingFriendsList()}},{key:"componentDidUpdate",value:function(){parseInt(this.state.current_id)!==parseInt(localStorage.clickedUser)&&this.componentDidMount()}},{key:"fetchingFriendsList",value:function(){var e=this;fetch("https://flatiron-foodie.herokuapp.com/following/".concat(localStorage.user_id)).then(function(e){return e.json()}).then(function(t){t.length>0?t.filter(function(e){return parseInt(e.id)===parseInt(localStorage.clickedUser)}).length>0&&e.setState({friends:!0}):e.setState({friends:!1})})}},{key:"render",value:function(){var e,t=this;this.state.user.restaurants&&(e=this.state.user.restaurants.map(function(e){return r.a.createElement("li",{onClick:function(){return t.handleClick(e.real_id)}}," ",e.name," ")}));var a=localStorage.clickedUser!==localStorage.user_id&&!1===this.state.friends,n=!0===this.state.friends&&localStorage.clickedUser!==localStorage.user_id;return r.a.createElement("div",{className:"profile-page"},r.a.createElement(k,{handleSearchRestaurant:this.props.handleSearchRestaurant,history:this.props.history}),r.a.createElement("div",{className:"profile-page-content"},r.a.createElement("img",{className:"profile-image",src:"images/foodie-profile-pic.jpg",alt:"profile-pic"}),r.a.createElement("h1",{className:"profile-name"},this.state.user.name),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("h2",{style:{color:"yellow",border:"solid white 2px",background:"red"}},"Liked Restaurants:")," ",r.a.createElement("div",{className:"liked-restaurants-list"},e)),r.a.createElement("br",null),a?r.a.createElement("button",{onClick:this.handleAddFriend},"Add Friend"):null,n?r.a.createElement("button",{onClick:this.handleDeleteFriend},"Remove Friend"):null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",user_name:"",searchTerm:"",AllRestaurant:[],detailRestaurant:{},xcoordinate:40.700862,ycoordinate:-73.987472},a.handleSearchRestaurant=function(e){a.getRestaurantFromYelp(e)},a.getGeoLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){localStorage.xcoo=e.coords.latitude,localStorage.ycoo=e.coords.longitude,a.setState(function(t){return{xcoordinate:e.coords.latitude,ycoordinate:e.coords.longitude}},a.getRestaurantFromYelp)})},a.getRestaurantFromYelp=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"food";fetch("https://flatiron-foodie.herokuapp.com/getRestaurant/".concat(e),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify({xcoo:a.state.xcoordinate,ycoo:a.state.ycoordinate})}).then(function(e){return e.json()}).then(function(e){e.error||a.setState({AllRestaurant:e.businesses})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getGeoLocation(),this.getRestaurantFromYelp()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(d,e)}}),r.a.createElement(p.a,{path:"/home",render:function(t){return r.a.createElement(R,Object.assign({coordinates:{lat:e.state.xcoordinate,lng:e.state.ycoordinate}},t,{handleSearchRestaurant:e.handleSearchRestaurant,AllRestaurant:e.state.AllRestaurant}))}}),r.a.createElement(p.a,{path:"/register",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(p.a,{path:"/friendlist",render:function(t){return r.a.createElement(U,Object.assign({handleSearchRestaurant:e.handleSearchRestaurant},t))}}),r.a.createElement(p.a,{path:"/show",render:function(t){return r.a.createElement(F,Object.assign({detailRestaurant:e.state.detailRestaurant,handleSearchRestaurant:e.handleSearchRestaurant},t))}}),r.a.createElement(p.a,{path:"/profile",render:function(t){return r.a.createElement(I,Object.assign({handleSearchRestaurant:e.handleSearchRestaurant},t))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(31);a(92);s.a.render(r.a.createElement(z.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.4ba3d2ec.chunk.js.map