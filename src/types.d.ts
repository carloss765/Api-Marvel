export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics?: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  series?: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  stories?: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
      type: string;
    }>;
  };
  events?: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  urls?: Array<{
    type: string;
    url: string;
  }>;
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  pageCount: number;
  characters?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  creators?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
      role: string;
    }>;
  };
  dates?: Array<{
    type: string;
    date: string;
  }>;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  start: string;
  end: string;
  characters?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  comics?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
}

export interface Series {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  startYear: number;
  endYear: number;
  rating: string;
  characters?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  comics?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
}

export interface Story {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  } | null;
  type: string;
  characters?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  comics?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
}

export interface Creator {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
  series?: {
    available: number;
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
}
