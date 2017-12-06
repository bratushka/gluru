### Installation
```sh
docker-compose build
docker-compose run front yarn
docker-compose up
```
Right after this you will have the application available at http://localhost:8000

### API
AccuWeather API is used directly, so pay attention: do not make queries to the
 API if not required. The app makes calls to the API only at the very beginning.
 Collecting all data requires making 51 call (1 to fetch the 50 top cities with
 current weather + 1 call per each city to fetch the forecast)

Considering the free dev account on AccuWeather is used - we have many restrictions
 on making calls. Most probably this application can be loaded with real data only
 once, in case API starts responding with HTTP500 - please consider changing the
 `API_KEY` which you can find in `src/utils/API.js::ApiTemplate::API_KEY`.

Currently the application is configured to use mocks instead of calling API, so all
 the data is fake. Consider changing `src/utils/API.js::MOCK` to `true` to fetch
 and see the real data, but remember about the API restrictions.

### Autocomplete
Autocomplete for the search field uses the vocabulary from
 `src/view/constants.js::ADJECTIVES`. Put more words if you wish.
