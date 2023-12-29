import { Component } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4,
    styles:
      [
        {
          "stylers": [
            {
              "hue": "#8EBC42"
            },
            {
              "saturation": 10
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#effefd"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ],

  };
  markerOptions: google.maps.MarkerOptions = {draggable: false,icon:"./assets/map-marker.svg"};
  markerPositions: google.maps.LatLngLiteral[] = [];


  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng!.toJSON());
  }

  constructor(httpClient: HttpClient) {
    // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library
    // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
    // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization

    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDZo41GIwkAp7N-y-JDbF38KrBQruwbIC0', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

}
