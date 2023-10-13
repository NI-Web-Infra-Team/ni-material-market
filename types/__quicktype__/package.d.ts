export interface PackageD {
    name:               string;
    version:            string;
    description:        string;
    private:            boolean;
    packageManager:     string;
    repository:         Repository;
    engines:            Engines;
    scripts:            Scripts;
    dependencies:       Dependencies;
    devDependencies:    { [key: string]: string };
    "simple-git-hooks": SimpleGitHooks;
}

export interface Dependencies {
    "@trpc/client": string;
    "@trpc/server": string;
    echarts:        string;
    "lodash-es":    string;
    pinia:          string;
    "trpc-nuxt":    string;
    tslib:          string;
    "vue-echarts":  string;
    zod:            string;
}

export interface Engines {
    node: string;
}

export interface Repository {
    type: string;
    url:  string;
}

export interface Scripts {
    preinstall:           string;
    postinstall:          string;
    "nuxt-prepare":       string;
    build:                string;
    "nuxt-build":         string;
    dev:                  string;
    "nuxt-dev":           string;
    "upgrade-dep":        string;
    cz:                   string;
    "semantic-release":   string;
    "icon-gen":           string;
    lint:                 string;
    "lint-fix":           string;
    "generate-api-type":  string;
    "generate-pkg-type":  string;
    "pm2-copy-to-output": string;
}

export interface SimpleGitHooks {
    "pre-commit": string;
}
