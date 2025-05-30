declare namespace google {
  namespace maps {
    class Map {
      constructor(
        mapDiv: Element,
        opts?: MapOptions
      );
      setCenter(latLng: LatLng | LatLngLiteral): void;
      setZoom(zoom: number): void;
      setOptions(options: MapOptions): void;
      panTo(latLng: LatLng | LatLngLiteral): void;
      panBy(x: number, y: number): void;
      setMapTypeId(mapTypeId: string): void;
      getBounds(): LatLngBounds;
      getCenter(): LatLng;
      getDiv(): Element;
      getHeading(): number;
      getMapTypeId(): string;
      getProjection(): any;
      getStreetView(): StreetViewPanorama;
      getTilt(): number;
      getZoom(): number;
    }

    class LatLng {
      constructor(lat: number, lng: number, noWrap?: boolean);
      lat(): number;
      lng(): number;
      toString(): string;
      toUrlValue(precision?: number): string;
      toJSON(): LatLngLiteral;
      equals(other: LatLng): boolean;
    }

    class LatLngBounds {
      constructor(sw?: LatLng | LatLngLiteral, ne?: LatLng | LatLngLiteral);
      contains(latLng: LatLng | LatLngLiteral): boolean;
      equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
      extend(point: LatLng | LatLngLiteral): LatLngBounds;
      getCenter(): LatLng;
      getNorthEast(): LatLng;
      getSouthWest(): LatLng;
      intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
      isEmpty(): boolean;
      toJSON(): LatLngBoundsLiteral;
      toString(): string;
      toUrlValue(precision?: number): string;
      union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
    }

    class StreetViewPanorama {
      constructor(container: Element, opts?: StreetViewPanoramaOptions);
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
      setPosition(latLng: LatLng | LatLngLiteral): void;
      setTitle(title: string): void;
      setLabel(label: string | MarkerLabel): void;
      setDraggable(draggable: boolean): void;
      setIcon(icon: string | Icon | Symbol): void;
      setOpacity(opacity: number): void;
      setVisible(visible: boolean): void;
      setZIndex(zIndex: number): void;
      getAnimation(): Animation;
      getMap(): Map | StreetViewPanorama;
      getPosition(): LatLng;
      getTitle(): string;
      getVisible(): boolean;
      addListener(eventName: string, handler: Function): MapsEventListener;
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(options: InfoWindowOpenOptions): void;
      close(): void;
      getContent(): string | Element;
      getPosition(): LatLng;
      setContent(content: string | Element): void;
      setPosition(position: LatLng | LatLngLiteral): void;
      setZIndex(zIndex: number): void;
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeId?: string;
      mapTypeControl?: boolean;
      fullscreenControl?: boolean;
      streetViewControl?: boolean;
      zoomControl?: boolean;
      styles?: any[];
      scrollwheel?: boolean;
      disableDoubleClickZoom?: boolean;
      draggable?: boolean;
      keyboardShortcuts?: boolean;
      [key: string]: any;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface LatLngBoundsLiteral {
      east: number;
      north: number;
      south: number;
      west: number;
    }

    interface MarkerOptions {
      position: LatLng | LatLngLiteral;
      map?: Map | StreetViewPanorama;
      title?: string;
      label?: string | MarkerLabel;
      draggable?: boolean;
      icon?: string | Icon | Symbol;
      opacity?: number;
      visible?: boolean;
      zIndex?: number;
      animation?: Animation;
      clickable?: boolean;
    }

    interface MarkerLabel {
      text: string;
      color?: string;
      fontFamily?: string;
      fontSize?: string;
      fontWeight?: string;
    }

    interface Icon {
      url: string;
      size?: Size;
      scaledSize?: Size;
      origin?: Point;
      anchor?: Point;
      labelOrigin?: Point;
    }

    interface Symbol {
      path: string | SymbolPath;
      fillColor?: string;
      fillOpacity?: number;
      scale?: number;
      strokeColor?: string;
      strokeOpacity?: number;
      strokeWeight?: number;
    }

    enum SymbolPath {
      BACKWARD_CLOSED_ARROW,
      BACKWARD_OPEN_ARROW,
      CIRCLE,
      FORWARD_CLOSED_ARROW,
      FORWARD_OPEN_ARROW
    }

    interface Size {
      width: number;
      height: number;
      equals(other: Size): boolean;
      toString(): string;
    }

    interface Point {
      x: number;
      y: number;
      equals(other: Point): boolean;
      toString(): string;
    }

    interface InfoWindowOptions {
      content?: string | Element;
      disableAutoPan?: boolean;
      maxWidth?: number;
      pixelOffset?: Size;
      position?: LatLng | LatLngLiteral;
      zIndex?: number;
    }

    interface InfoWindowOpenOptions {
      map?: Map | StreetViewPanorama;
      anchor?: Marker | any;
    }

    interface StreetViewPanoramaOptions {
      position?: LatLng | LatLngLiteral;
      pov?: StreetViewPov;
      zoom?: number;
      visible?: boolean;
      disableDefaultUI?: boolean;
    }

    interface StreetViewPov {
      heading: number;
      pitch: number;
    }

    enum Animation {
      BOUNCE,
      DROP
    }

    interface MapsEventListener {
      remove(): void;
    }
  }
} 