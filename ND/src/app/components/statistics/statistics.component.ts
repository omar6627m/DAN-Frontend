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
      [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
    }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
    }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{"visibility": "off"}]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#d5d5d5"}]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#7574c0"}, {"saturation": "-37"}, {"lightness": "75"}]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
    }, {
      "featureType": "poi.business",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#7574c0"}, {"saturation": "-2"}, {"lightness": "53"}]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{"color": "#dedede"}, {"lightness": 21}]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#7574c0"}, {"lightness": "69"}]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{"color": "#7574c0"}, {"lightness": "25"}]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{"lightness": "38"}, {"color": "#000000"}]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
    }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]}],

  };
  markerOptions: google.maps.MarkerOptions = {draggable: false};
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
