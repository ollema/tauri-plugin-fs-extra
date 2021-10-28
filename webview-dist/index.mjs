import { invoke } from '@tauri-apps/api/tauri';

// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
async function metadata(path) {
    return await invoke('plugin:fs-extra|metadata', { path }).then(metadata => {
        const { accessedAtMs, createdAtMs, modifiedAtMs, ...data } = metadata;
        return {
            accessedAt: new Date(accessedAtMs),
            createdAt: new Date(createdAtMs),
            modifiedAt: new Date(modifiedAtMs),
            ...data,
        };
    });
}

export { metadata };
