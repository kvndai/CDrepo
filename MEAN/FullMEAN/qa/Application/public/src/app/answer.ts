export class Answer {
  public answer: String = '';
  public description: String = '';
  public user: String = null;
  public likes: {type: Number, default: 0};
}
