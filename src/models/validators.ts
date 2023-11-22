export interface Validator {
  validator: (email: string) => boolean;
  errorText?: string;
}
