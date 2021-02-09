if ($localStorage.myToogleValue)
    $scope.myToggle = { checked: $localStorage.myToogleValue.checked };
else
    $scope.myToggle = { checked: true };