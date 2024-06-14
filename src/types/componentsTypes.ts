export interface IMainCardProps {
  temp: number;
  time: number;
  city: string;
}

export interface ISubCardProps {
  temp: number;
  tempFeelsLike: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
}

export interface IFetchError {
  status: number;
  data: {
    cod: string;
    message: string;
  }
}