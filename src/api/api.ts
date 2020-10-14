import axios from "axios";
import {AxiosResponse} from "axios";

interface Meta {
    Name: string;
    Uri: string;
    Create: number;
}

const metaCache: Map<string, Meta[]> = new Map();

function imagesByIndex(index: number, size: number): Meta[] | Promise<Meta[]> {
    const key = `${index}:${index+size}`;
    const metaList = metaCache.get(key)
    if (typeof metaList !== "undefined") {
        return metaList;
    }

    const promise = axios.get("https://na.minamiktr.com" + "/api/LegendaryMinalinsky?" + `start=${index}&size=${size}`);
    return promise.then((response: AxiosResponse<any>): Meta[] => {
        if (response.status !== 200) {
            return [];
        }
        let metaList = response.data as Meta[];
        // metaList = transform(metaList);
        metaCache.set(key, metaList);
        return metaList as Meta[];
    });
}

function transform(metaList: Meta[]): Meta[] {
    const baseUri = "https://na.minamiktr.com/Minalinsky/";
    return metaList.map((meta: Meta): Meta => {
        return {
            Name: meta.Name,
            Uri: `${baseUri}${meta.Name}`,
            Create: meta.Create,
        }
    });
}

export {
    Meta,
    imagesByIndex,
};
