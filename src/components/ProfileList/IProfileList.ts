import { IReCommended } from "../../ui/RecommendedBlog/IRecommended";

export interface IProfileList {
  title: string;
  profiles: IReCommended[] | undefined;
  loading?: boolean;
}
