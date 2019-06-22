import { Image } from "../../types";

export interface PhotoListProps {
  data: Image[];
  onPress: (id: string) => void;
  headerComponent?: any;
  loadingMore?: boolean;
  loadMore?: any;
}
