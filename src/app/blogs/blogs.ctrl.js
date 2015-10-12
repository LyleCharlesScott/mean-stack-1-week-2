"use strict";

require("../app.js");

(function () {

  angular.module("intellyBlog").controller("BlogsCtrl", ["BlogsService", function (BlogsService) {
    var vm = this;

    vm.blogs = [];
    vm.delete = deleteBlog;

    initialize();

    /////

    function initialize () {
      getBlogs();
    }

    function getBlogs () {
      BlogsService.get().then(function (resp) {
        vm.blogs = resp.data;
      });
    }

    function deleteBlog (blog) {
      BlogsService.delete(blog).then(function () {
        getBlogs();
      });
    }
  }]);

})();
