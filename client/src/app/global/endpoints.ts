import { environment } from '@env/environment'

interface EnvModel {
  projects: {
    paginado: string
    filters: string
  }
  project: {
    id: string
  }
  setting: {
    logo: string
    tags: string
    languages: string
    igv: string
  }
}

export const PRODUCTION: EnvModel = {
  projects: {
    paginado: `${environment.apiUrl}/projects/paginado`,
    filters: `${environment.apiUrl}/projects/filters`
  },
  project: {
    id: `${environment.apiUrl}/projects`
  },
  setting: {
    logo: `${environment.apiUrl}/settings/logo`,
    tags: `${environment.apiUrl}/settings/tags`,
    languages: `${environment.apiUrl}/settings/languages`,
    igv: `${environment.apiUrl}/settings/igv`
  }
}
export const DEVELOPMENT: EnvModel = {
  projects: {
    paginado: `${environment.apiUrl}/projects/paginado`,
    filters: `${environment.apiUrl}/projects/filters`
  },
  project: {
    id: `${environment.apiUrl}/projects`
  },
  setting: {
    logo: `${environment.apiUrl}/settings/logo`,
    tags: `${environment.apiUrl}/settings/tags`,
    languages: `${environment.apiUrl}/settings/languages`,
    igv: `${environment.apiUrl}/settings/igv`
  }
}

export const STAGING: EnvModel = {
  projects: {
    paginado: `${environment.apiUrl}/projects`,
    filters: `${environment.apiUrl}/projects`
  },
  project: {
    id: `${environment.apiUrl}/projects_id`
  },
  setting: {
    logo: `${environment.apiUrl}/settings`,
    tags: `${environment.apiUrl}/settings`,
    languages: `${environment.apiUrl}/settings`,
    igv: `${environment.apiUrl}/settings`
  }
}

export const ENDPOINT = (): EnvModel => {
  const envs: any = {
    development: DEVELOPMENT,
    staging: STAGING,
    production: PRODUCTION
  }
  const result: EnvModel = envs[environment.env]
  return result || DEVELOPMENT
}
