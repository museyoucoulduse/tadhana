(function () {
    'use_strict';
    angular.module("Tadhana", [])

    .controller("StoryCtrl", StoryCtrl);

    StoryCtrl.$inject = ['$http']

    function StoryCtrl($http) {
        var story = this;

        story.addStory = () => {
            var newStory = {
                title: story.newTitle,
                author: story.newName,
                email: story.newEmail,
                story: story.newStory
            };
            $http.post('/addstory', newStory) // PASS THE DATA AS THE SECOND PARAMETER
                .success(
                    function (success) {
                        console.log(success)
                    })
                .error(
                    function (error) {
                        console.log(error)
                    });
            //                stories.push(newStory);
            story.newStory = '';
        };

        //            story.stories = stories;
    };
})();
