export interface Environment {
  production: boolean;
  environment: 'development' | 'staging' | 'production';
  imagePath: string;
  url: {
    host: string;
  };
}
