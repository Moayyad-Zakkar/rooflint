// Объявляем переменные map и infoWindow за пределами функции initMap,
// тем самым делая их глобальными и теперь мы их можем использовать внутри любой функции, а не только внутри initMap, как это было раньше.
    var map, infoWindow;
      
    function initMap() {
        if(markersData.length < 15){
            if(markersData[0].name == "Любашовка"){
                var centerLatLng = new google.maps.LatLng(markersData[1].lat, markersData[1].lng);
                var mapOptions = {
                    center: centerLatLng,
                    zoom: 8
                };
            }else{
                var centerLatLng = new google.maps.LatLng(markersData[0].lat, markersData[0].lng);
                var mapOptions = {
                    center: centerLatLng,
                    zoom: 8
                };
            }
            
        }else{
           var centerLatLng = new google.maps.LatLng(48.737401, 31.369856); 
           var mapOptions = {
                center: centerLatLng,
                zoom: 6
            };
        }
        
        
      
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

      
        // Создаем объект информационного окна и помещаем его в переменную infoWindow
        // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
        infoWindow = new google.maps.InfoWindow();
      
        // Отслеживаем клик в любом месте карты
        google.maps.event.addListener(map, "click", function() {
            // infoWindow.close - закрываем информационное окно.
            infoWindow.close();
        });



        var markers = []; 
        
        var image = new google.maps.MarkerImage('/wp-content/plugins/yandex-maps-full/marks/blue.png',      
        new google.maps.Size(37, 42),      
        new google.maps.Point(0,0),      
        new google.maps.Point(11, 42));
        /*
        var image = '/wp-content/plugins/yandex-maps-full/marks/blue.png';
          */
        // Перебираем в цикле все координата хранящиеся в markersData
        for (var i = 0; i < markersData.length; i++){
      
            var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
            var name = markersData[i].name;
            var address = markersData[i].address;
            var link = markersData[i].link;
      
            // Добавляем маркер с информационным окном
            addMarker(latLng, name, address, link);

        }   

        var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: '/wp-content/themes/pullsky/img/markerclusterer/m'});
        

        // Функция добавления маркера с информационным окном
        function addMarker(latLng, name, address, link) {
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                icon: image
            });

            markers.push(marker);
            
          
            // Отслеживаем клик по нашему маркеру
            google.maps.event.addListener(marker, "click", function() {
          
                // contentString - это переменная в которой хранится содержимое информационного окна.
                var contentString = '<div class="infowindow">' +
                                        '<h3>' + name + '</h3>' +
                                        '<p>' + address + '</p>' +
                                        '<a href="' + link + '">Подробнее</a>' +
                                    '</div>';
          
                // Меняем содержимое информационного окна
                infoWindow.setContent(contentString);
          
                // Показываем информационное окно
                infoWindow.open(map, marker);
          
            });
        }
    
    }
    google.maps.event.addDomListener(window, "load", initMap);
      
    

  