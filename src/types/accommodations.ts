import Accommodations from "@/models/public/Accommodations";
import { Pagination } from "./pagination";
import Hosts from "@/models/public/Hosts";

export interface ListAccommodationResponse {
  data: Accommodations[];
  pagination: Pagination;
}

export interface DetailAccommodationResponse {
  data: Omit<Accommodations, "host_id"> & {
    hosts: Pick<Hosts, "id" | "name" | "picture_url" | "created_at" | "about">;
  };
}
