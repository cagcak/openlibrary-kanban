export class BoardBooksByAuthor {
  static readonly type = '[Board] Books By Author';
  static readonly desc = 'populates board books by author';
  constructor(public payload: { author: string }) {}
}
