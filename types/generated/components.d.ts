import type { Schema, Attribute } from '@strapi/strapi';

export interface ExhibitionComponentsExhibitionPressitems
  extends Schema.Component {
  collectionName: 'components_exhibition_components_exhibition_pressitems';
  info: {
    displayName: 'Exhibition Pressitems';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    author: Attribute.String;
    url: Attribute.String;
    date_published: Attribute.Date;
    file: Attribute.Media;
  };
}

export interface GlobalComponentsAnnualFiles extends Schema.Component {
  collectionName: 'components_global_components_annual_files';
  info: {
    displayName: 'Annual Files';
    icon: 'server';
  };
  attributes: {
    year: Attribute.Integer;
    file: Attribute.Media;
  };
}

export interface GlobalComponentsKeyValueList extends Schema.Component {
  collectionName: 'components_global_components_key_value_lists';
  info: {
    displayName: 'Key Value list';
    icon: 'bulletList';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.String;
  };
}

export interface GlobalComponentsPlannedEvents extends Schema.Component {
  collectionName: 'components_global_components_planned_events';
  info: {
    displayName: 'Planned Events';
    icon: 'calendar';
  };
  attributes: {
    url: Attribute.String;
    date: Attribute.Date;
    time_start: Attribute.Time;
    time_end: Attribute.Time;
  };
}

export interface SinglepageComponentsActList extends Schema.Component {
  collectionName: 'components_singlepage_components_act_lists';
  info: {
    displayName: 'Act List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    rel_exh: Attribute.Relation<
      'singlepage-components.act-list',
      'oneToOne',
      'api::exhibition.exhibition'
    >;
    rel_act_c: Attribute.Relation<
      'singlepage-components.act-list',
      'oneToOne',
      'api::activity-category.activity-category'
    >;
    content_short: Attribute.Text;
    type: Attribute.String;
    schoolyear: Attribute.String;
    date: Attribute.Date;
    photo_cover: Attribute.Media;
  };
}

export interface SinglepageComponentsAddress extends Schema.Component {
  collectionName: 'components_singlepage_components_addresses';
  info: {
    displayName: 'Address';
    icon: 'house';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    streetname: Attribute.String;
    city: Attribute.String;
    zipcode: Attribute.String;
    country: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
    website_url: Attribute.String;
    instagram_url: Attribute.String;
    facebook_url: Attribute.String;
    tripadvisor_url: Attribute.String;
    youtube_url: Attribute.String;
    twitter_url: Attribute.String;
  };
}

export interface SinglepageComponentsBoardmembersList extends Schema.Component {
  collectionName: 'components_singlepage_components_boardmembers_lists';
  info: {
    displayName: 'Contact List';
    icon: 'alien';
    description: '';
  };
  attributes: {
    first_name: Attribute.String;
    last_name: Attribute.String;
    phone_primary: Attribute.String;
    phone_secondary: Attribute.String;
    function: Attribute.String;
    email: Attribute.Email;
    photo_portrait: Attribute.Media;
  };
}

export interface SinglepageComponentsCollaboratorList extends Schema.Component {
  collectionName: 'components_singlepage_components_collaborator_lists';
  info: {
    displayName: 'Collaborator List';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.RichText;
    website_url: Attribute.String;
    instagram_url: Attribute.String;
    logo_image: Attribute.Media;
  };
}

export interface SinglepageComponentsLoungeExhibitionsList
  extends Schema.Component {
  collectionName: 'components_singlepage_components_lounge_exhibitions_lists';
  info: {
    displayName: 'Lounge Exhibitions List';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    date_start: Attribute.Date;
    date_end: Attribute.Date;
    content: Attribute.RichText;
    photo_cover: Attribute.Media;
    photo_gallery: Attribute.Media;
  };
}

export interface SinglepageComponentsOpeningHours extends Schema.Component {
  collectionName: 'components_singlepage_components_opening_hours';
  info: {
    displayName: 'Opening Hours';
    icon: 'clock';
  };
  attributes: {
    day: Attribute.String;
    time_open: Attribute.Time;
    time_closed: Attribute.Time;
  };
}

export interface SinglepageComponentsPressArchiveList extends Schema.Component {
  collectionName: 'components_singlepage_components_press_archive_lists';
  info: {
    displayName: 'Press Archive List';
    icon: 'archive';
  };
  attributes: {
    title: Attribute.String;
    author: Attribute.String;
    url: Attribute.String;
    published_date: Attribute.Date;
    file: Attribute.Media;
  };
}

export interface SinglepageComponentsRoomPricing extends Schema.Component {
  collectionName: 'components_singlepage_components_room_pricings';
  info: {
    displayName: 'Room Pricing';
    icon: 'handHeart';
  };
  attributes: {
    day_type: Attribute.String;
    timeframe_start: Attribute.Time;
    timeframe_end: Attribute.Time;
    price_per_day: Attribute.Integer;
  };
}

export interface SinglepageComponentsRoomTypes extends Schema.Component {
  collectionName: 'components_singlepage_components_room_types';
  info: {
    displayName: 'Room Types';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    content_short: Attribute.Text;
    capacity: Attribute.Integer;
  };
}

export interface TicketComponentsBasicTickets extends Schema.Component {
  collectionName: 'components_ticket_components_basic_tickets';
  info: {
    displayName: 'Basic Tickets';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Integer;
    hex_color: Attribute.String;
    extra_info: Attribute.String;
  };
}

export interface TicketComponentsSpecialPerks extends Schema.Component {
  collectionName: 'components_ticket_components_special_perks';
  info: {
    displayName: 'Special Perks';
    icon: 'database';
  };
  attributes: {
    content: Attribute.String;
  };
}

export interface TicketComponentsSpecialTickets extends Schema.Component {
  collectionName: 'components_ticket_components_special_tickets';
  info: {
    displayName: 'Special Tickets';
    icon: 'crown';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    button_txt: Attribute.String;
    description: Attribute.Text;
    perks: Attribute.Component<'ticket-components.special-perks', true>;
    price: Attribute.RichText;
    url: Attribute.String;
    sale: Attribute.Boolean;
    sale_price: Attribute.Integer;
  };
}

export interface TicketComponentsTicketTypes extends Schema.Component {
  collectionName: 'components_ticket_components_ticket_types';
  info: {
    displayName: 'Ticket Types';
    icon: 'database';
  };
  attributes: {
    type: Attribute.String;
    tickets: Attribute.Component<'ticket-components.basic-tickets', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'exhibition-components.exhibition-pressitems': ExhibitionComponentsExhibitionPressitems;
      'global-components.annual-files': GlobalComponentsAnnualFiles;
      'global-components.key-value-list': GlobalComponentsKeyValueList;
      'global-components.planned-events': GlobalComponentsPlannedEvents;
      'singlepage-components.act-list': SinglepageComponentsActList;
      'singlepage-components.address': SinglepageComponentsAddress;
      'singlepage-components.boardmembers-list': SinglepageComponentsBoardmembersList;
      'singlepage-components.collaborator-list': SinglepageComponentsCollaboratorList;
      'singlepage-components.lounge-exhibitions-list': SinglepageComponentsLoungeExhibitionsList;
      'singlepage-components.opening-hours': SinglepageComponentsOpeningHours;
      'singlepage-components.press-archive-list': SinglepageComponentsPressArchiveList;
      'singlepage-components.room-pricing': SinglepageComponentsRoomPricing;
      'singlepage-components.room-types': SinglepageComponentsRoomTypes;
      'ticket-components.basic-tickets': TicketComponentsBasicTickets;
      'ticket-components.special-perks': TicketComponentsSpecialPerks;
      'ticket-components.special-tickets': TicketComponentsSpecialTickets;
      'ticket-components.ticket-types': TicketComponentsTicketTypes;
    }
  }
}
