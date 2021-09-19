import { StoreOptions } from '@ngxs/store/src/symbols';

export namespace Board {
  export const NAME = 'BoardState';
  export const DEFAULTS = {} as State;
  export const OPTIONS = { name: NAME, defaults: DEFAULTS } as StoreOptions<State>;

  export interface State {
    book: Book;
  }

  export interface Book {
    start: number;
    num_found: number;
    numFoundExact: boolean;
    docs: Doc[];
    q?: string;
    offset?: any;
  }

  export interface Doc extends AdditionalDocumentFields {
    cover_i: number;
    has_fulltext: boolean;
    edition_count: number;
    title: string;
    author_name: string[];
    first_publish_year: number;
    key: string;
    ia: string[];
    author_key: string[];
    public_scan_b: boolean;
  }

  type AdditionalDocumentFields = Partial<{
    key: string;
    text: string[];
    type: string;
    seed: string[];
    title: string;
    title_suggest: string;
    has_fulltext: boolean;
    edition_count: number;
    edition_key: string[];
    publish_date: (Date | string)[];
    publish_year: (Date | number)[];
    first_publish_year: number;
    lccn: string[];
    publish_place: string[];
    oclc: string[];
    contributor: string[];
    lcc: string[];
    ddc: string[];
    isbn: string[];
    last_modified_i: number;
    ebook_count_i: number;
    ia: string[];
    public_scan_b: boolean;
    ia_collection_s: string;
    lending_edition_s: string;
    lending_identifier_s: string;
    printdisabled_s: string;
    cover_edition_key: string;
    cover_i: number;
    first_sentence: string[];
    publisher: string[];
    language: string[];
    author_key: string[];
    author_name: string[];
    author_alternative_name: string[];
    person: string[];
    place: string[];
    subject: string[];
    time: string[];
    id_alibris_id: string[];
    id_amazon: string[];
    id_bcid: string[];
    id_dnb: string[];
    id_goodreads: string[];
    id_google: string[];
    id_librarything: string[];
    id_libris: string[];
    id_overdrive: string[];
    id_wikidata: string[];
    ia_loaded_id: string[];
    ia_box_id: string[];
    id_dep_sito_legal: string[];
    publisher_facet: string[];
    person_key: string[];
    time_facet: string[];
    place_key: string[];
    person_facet: string[];
    subject_facet: string[];
    _version_: number;
    place_facet: string[];
    lcc_sort: string;
    author_facet: string[];
    subject_key: string[];
    time_key: string[];
    ddc_sort: string;
  }>;
}
