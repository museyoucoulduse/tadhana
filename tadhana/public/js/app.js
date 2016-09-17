(function () {
    'use_strict';
    angular.module("JinAndJang", [])

    .controller("StoryCtrl", StoryCtrl);

        function StoryCtrl () {
            var story = this;

            var stories = [{
                title: "lol",
                author: "me",
                story: "buahahahahahaha"
            }]

//            $scope.story = '';
//            $scope.title = "Title";
//            $scope.name = 'Anonymous';

            story.addStory = function () {
                var newStory = {
                    title: story.newTitle,
                    author: story.newName,
                    story: story.newStory
                };
                stories.push(newStory);
                story.newStory = '';
            };

            story.stories = stories;
        };
})();
