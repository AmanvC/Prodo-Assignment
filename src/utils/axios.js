import axios from "axios";
import { baseUrl } from "./constants";

export const makeRequest = axios.create({
  baseURL: baseUrl,
});
