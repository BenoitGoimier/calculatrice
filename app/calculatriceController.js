(function() {
	angular.module('calculatriceApp').controller('CalculatriceController', [ '$scope', function($scope){

		$scope.formule = '';
		this.res = 0;
		this.on = 1;
		this.last = '';

		this.add = function (text) {
			if (this.on == 1) {
				if (this.res == 1) {
					$scope.formule = '';
					this.res = 0;
				}
				if (this.res == 0) {
					if(!isNaN(text)){
						this.last = this.last + text.toString();
					} else {
						this.last = '';
					}

					$scope.formule = $scope.formule + text.toString();
				}
			}
		};

		this.supp = function () {
			if (this.on == 1) {
				$scope.formule = $scope.formule.substring(0, $scope.formule.length - 1);
			}
		};

		this.equals = function () {
			if (this.on == 1) {
				this.res = 1;
				$scope.formule = $scope.formule.replace("--", "+");
				$scope.resultat = '';
				$scope.resultat = eval($scope.formule);
			}
		};

		this.resetLast = function() {
			if (this.last.length >= 1) {
				$scope.formule = $scope.formule.substring(0, $scope.formule.length - this.last.length);
				this.last = '0';
				$scope.formule = $scope.formule + '0'.toString();
			}
		};

		this.resetAll = function () {
			if (this.on == 1) {
				$scope.formule = '';
				$scope.resultat = 0;
			}
		};

		this.inverse = function() {
			if (this.on == 1) {
				if ($scope.resultat) {
					$scope.resultat = -$scope.resultat;
				}
			}
		};

		this.off = function() {
			$scope.formule = '';
			$scope.resultat = '';
			this.on = !this.on;
		};
	}]);
})();