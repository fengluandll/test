import {readFile} from 'fs';

function appendAndReadPromise(path: string, data: string): Promise<string> {
    return appendPromise(path, data)
        .then(() => readPromise(path))
        .catch(error => console.error(error))
}

function readFilePromise(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readFile(path, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
) => void

class Promise<T, E extends Error> {
    constructor(f: Executor<T, E>) {
    }
    then<U, F extends Error>(g: (result: T) => Promise<U, F>): Promise<U, F>
    catch<U, F extends Error>(g: (error: E) => Promise<U, F>): Promise<U, F>
}
