import Accommodations from "@/models/public/Accommodations";
import { Pagination } from "./pagination";

export interface AccommodationResponse {
  data: Accommodations[];
  pagination: Pagination;
}
