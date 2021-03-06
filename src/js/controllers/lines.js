angular
  .module('twitterForLondon')
  .controller('LinesIndexController', LinesIndexController)
  .controller('LinesFavIndexController', LinesFavIndexController)
  .controller('LinesShowController', LinesShowController);


LinesIndexController.$inject = ['TFL', '$state'];
function LinesIndexController(TFL, $state) {
  const linesIndex = this;
  linesIndex.all = [];

  TFL.getStatuses()
    .then((lines) => {
      linesIndex.all = lines;
    });

  function logout() {
    localStorage.removeItem('token');
    $state.go('login');
  }
  linesIndex.logout = logout;
}

LinesFavIndexController.$inject = ['TFL', '$auth', 'User'];
function LinesFavIndexController(TFL, $auth, User) {
  const linesFavIndex = this;
  linesFavIndex.lineFavs = [];
  User.get({id: $auth.getPayload()._id}, (user) => {
    linesFavIndex.user = user;

    TFL.getStatuses(user.lineFavs)
      .then((lines) => {
        linesFavIndex.lineFavs = lines;
      });
  });

}

LinesShowController.$inject = ['TFL', '$http', '$state'];
function LinesShowController(TFL, $http, $state) {
  const linesShow = this;
  linesShow.tweets = [];

  TFL.getStatuses([$state.params.tflId])
    .then((lines) => {
      linesShow.line = lines[0];
    });

  function getTweets() {
    $http({
      method: 'GET',
      url: '/tweets',
      params: { q: $state.params.tflId }
    }).then((res, err) => {
      if(err) {
        console.log('Something went wrong, run away from ', err );
        return;
      }
      linesShow.tweets = res.data.statuses;
      console.log(linesShow.tweets);
    });
  }

  getTweets();
}

// LinesFavController.$inject = ['TFL', '$http', '$state'];
// function LinesFavController(TFL, $http, $state) {
//   const linesFav = this;
//   linesFave.tweets = [];
//
// }
