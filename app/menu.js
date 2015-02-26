(function(){
    var app = angular.module('menu-directives', []);

    app.directive("bolsaDeTrabajo", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/bolsadetrabajo.html"
      };
    });
    
    app.directive("contacto", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/contacto.html"
      };
    });
    
    app.directive("credito", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/credito.html"
      };
    });
    
    app.directive("faq", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/faq.html"
      };
    });
    
    app.directive("prepago", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/prepago.html"
      };
    });

    app.directive("promociones", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/promociones.html"
      };
    });

    app.directive("ubicaciones", function() {
      return {
        restrict: 'E',
        templateUrl: "partials/ubicaciones.html"
      };
    }); 

    app.directive("menu", function() {
      return {
        restrict: "E",
        templateUrl: "partials/menu.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("menu2", function() {
      return {
        restrict: "A",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });    

  })();
