export interface PackageD {
    name:               string;
    version:            string;
    private:            boolean;
    license:            string;
    packageManager:     string;
    repository:         Repository;
    engines:            Engines;
    scripts:            Scripts;
    dependencies:       Dependencies;
    devDependencies:    DevDependencies;
    "simple-git-hooks": SimpleGitHooks;
}

export interface Dependencies {
    echarts:        string;
    "element-plus": string;
    "lodash-es":    string;
    pinia:          string;
    tslib:          string;
    "vue-echarts":  string;
}

export interface DevDependencies {
    "@atao60/fse-cli":                  string;
    "@commitlint/cli":                  string;
    "@commitlint/config-conventional":  string;
    "@element-plus/nuxt":               string;
    "@mockoon/cli":                     string;
    "@nuxt/devtools":                   string;
    "@nuxtjs/color-mode":               string;
    "@nuxtjs/eslint-config-typescript": string;
    "@nuxtjs/i18n":                     string;
    "@pinia/nuxt":                      string;
    "@semantic-release/changelog":      string;
    "@semantic-release/exec":           string;
    "@semantic-release/git":            string;
    "@semantic-release/gitlab":         string;
    "@semantic-release/gitlab-config":  string;
    "@types/lodash-es":                 string;
    "@types/node":                      string;
    "@vueuse/components":               string;
    "@vueuse/core":                     string;
    "@vueuse/nuxt":                     string;
    autoprefixer:                       string;
    commander:                          string;
    daisyui:                            string;
    eslint:                             string;
    "eslint-config-prettier":           string;
    "eslint-plugin-import":             string;
    "eslint-plugin-jsdoc":              string;
    "eslint-plugin-jsonc":              string;
    "git-cz":                           string;
    "icon-gen":                         string;
    "lint-staged":                      string;
    "npm-run-all":                      string;
    nuxt:                               string;
    "nuxt-icon":                        string;
    "nuxt-vite-legacy":                 string;
    postcss:                            string;
    prettier:                           string;
    quicktype:                          string;
    sass:                               string;
    sharp:                              string;
    "simple-git-hooks":                 string;
    "swagger-typescript-api":           string;
    tailwindcss:                        string;
    taze:                               string;
    terser:                             string;
    "unplugin-auto-import":             string;
    "unplugin-vue-components":          string;
    "vue-tsc":                          string;
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
