var app= angular.module('aplicacion',[]);

app.controller('PrincipalCtrl',function($scope,$http){
//$http.get("https://worldcup.sfg.io/matches/today")
$http.get("data/data.json")
.then(function(response){
    $scope.ejemplo=response.data;

    $scope.informacionaMostrar=[];
 

    for(var posicion=0; posicion<$scope.ejemplo.length; posicion++){
        $scope.informacionaMostrar.push($scope.ejemplo[posicion].home_team_country );
        $scope.informacionaMostrar.push($scope.ejemplo[posicion].away_team_country );
      


        console.log("posicion", $scope.ejemplo[posicion].home_team_country);  
    }
    $scope.banderas=[];
    for(var posicion=0; posicion<$scope.ejemplo.length; posicion++){
       
        $scope.banderas.push("http://www.countryflags.io/"+$scope.ejemplo[posicion].bandera_vis+"/flat/64.png");
        $scope.banderas.push("http://www.countryflags.io/"+$scope.ejemplo[posicion].bandera_loc+"/flat/64.png");
              
    }
    console.log($scope.banderas)
})

 
   

    
  
    


  }
)


/*app.controller('EjemploCtr',function($scope){
   
        $scope.data1=[{pais:"colombia",capital:"Bogota"},
        {pais:"Venezuela",capital:"Caracas"},
        {pais:"Venezuela",capital:"Caracas"},
        {pais:"Peru",capital:"Lima"},
        {pais:"Rusia",capital:"Muscu"}
    ]

    $scope.informacionaMostrar=[];

    for(var posicion=0; posicion<$scope.data1.length;posicion++){
        $scope.informacionaMostrar.push($scope.data1[posicion].pais);
    }
    
    })



    app.controller('Ejemplopais',function($scope){
   
        $scope.data2=[{home_team_country:"Colombia",home_team_country:"Senegal"}
        
    ]

    $scope.informaciopais=[];

    for(var posicion=0; posicion<$scope.data2.length;posicion++){
        $scope.informaciopais.push($scope.data2[posicion].home_team_country);
    }
    
    })*/
