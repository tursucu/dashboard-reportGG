/* eslint-disable react/prop-types */

/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { GET_LEAGUE } from '../queries';
import TdModule from './components/Module';
import {
  Wrapper,
  Main,
  SelectContainer,
  Container,
  Label,
  Button,
  Select,
  WrapContainer,
  Head,
} from '../components/dashboard/Wrapper';
import SideBar from './components/sidebar/index';

function League() {
  const [league, { loading: leagueLoading }] = useMutation(GET_LEAGUE);

  // Challenger
  const [leagueChallenger, { loading: challengerLoading }] = useMutation(
    GET_LEAGUE
  );

  // GrandMaster
  const [leagueGrand, { loading: grandLoading }] = useMutation(GET_LEAGUE);

  // Master
  const [leagueMaster, { loading: masterLoading }] = useMutation(GET_LEAGUE);

  // Diamond
  const [leagueDiamondI, { loading: diamondLoadingI }] = useMutation(
    GET_LEAGUE
  );
  const [leagueDiamondII, { loading: diamondLoadingII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueDiamondIII, { loading: diamondLoadingIII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueDiamondIV, { loading: diamondLoadingIV }] = useMutation(
    GET_LEAGUE
  );

  // Platinum
  const [leaguePlatinumI, { loading: platinumLoadingI }] = useMutation(
    GET_LEAGUE
  );
  const [leaguePlatinumII, { loading: platinumLoadingII }] = useMutation(
    GET_LEAGUE
  );
  const [leaguePlatinumIII, { loading: platinumLoadingIII }] = useMutation(
    GET_LEAGUE
  );
  const [leaguePlatinumIV, { loading: platinumLoadingIV }] = useMutation(
    GET_LEAGUE
  );

  // Gold
  const [leagueGoldI, { loading: goldLoadingI }] = useMutation(GET_LEAGUE);
  const [leagueGoldII, { loading: goldLoadingII }] = useMutation(GET_LEAGUE);
  const [leagueGoldIII, { loading: goldLoadingIII }] = useMutation(GET_LEAGUE);
  const [leagueGoldIV, { loading: goldLoadingIV }] = useMutation(GET_LEAGUE);

  // Silver
  const [leagueSilverI, { loading: silverLoadingI }] = useMutation(GET_LEAGUE);
  const [leagueSilverII, { loading: silverLoadingII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueSilverIII, { loading: silverLoadingIII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueSilverIV, { loading: silverLoadingIV }] = useMutation(
    GET_LEAGUE
  );

  // Bronze
  const [leagueBronzeI, { loading: bronzeLoadingI }] = useMutation(GET_LEAGUE);
  const [leagueBronzeII, { loading: bronzeLoadingII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueBronzeIII, { loading: bronzeLoadingIII }] = useMutation(
    GET_LEAGUE
  );
  const [leagueBronzeIV, { loading: bronzeLoadingIV }] = useMutation(
    GET_LEAGUE
  );

  // Iron
  const [leagueIronI, { loading: ironLoadingI }] = useMutation(GET_LEAGUE);
  const [leagueIronII, { loading: ironLoadingII }] = useMutation(GET_LEAGUE);
  const [leagueIronIII, { loading: ironLoadingIII }] = useMutation(GET_LEAGUE);
  const [leagueIronIV, { loading: ironLoadingIV }] = useMutation(GET_LEAGUE);

  const leagueMultiAnaliz = (event) => {
    event.preventDefault();
    const region = event.target.elements.region.value;
    const queue = event.target.elements.queue.value;

    // Challenger
    leagueChallenger({
      variables: {
        region,
        tier: 'CHALLENGER',
        division: 'I',
        queue,
      },
    });

    // GrandMaster
    leagueGrand({
      variables: {
        region,
        tier: 'GRANDMASTER',
        division: 'I',
        queue,
      },
    });

    // Master
    leagueMaster({
      variables: {
        region,
        tier: 'MASTER',
        division: 'I',
        queue,
      },
    });

    // Diamond
    leagueDiamondI({
      variables: {
        region,
        tier: 'DIAMOND',
        division: 'I',
        queue,
      },
    });
    leagueDiamondII({
      variables: {
        region,
        tier: 'DIAMOND',
        division: 'II',
        queue,
      },
    });
    leagueDiamondIII({
      variables: {
        region,
        tier: 'DIAMOND',
        division: 'III',
        queue,
      },
    });
    leagueDiamondIV({
      variables: {
        region,
        tier: 'DIAMOND',
        division: 'IV',
        queue,
      },
    });

    // Platinum
    leaguePlatinumI({
      variables: {
        region,
        tier: 'PLATINUM',
        division: 'I',
        queue,
      },
    });
    leaguePlatinumII({
      variables: {
        region,
        tier: 'PLATINUM',
        division: 'II',
        queue,
      },
    });
    leaguePlatinumIII({
      variables: {
        region,
        tier: 'PLATINUM',
        division: 'III',
        queue,
      },
    });
    leaguePlatinumIV({
      variables: {
        region,
        tier: 'PLATINUM',
        division: 'IV',
        queue,
      },
    });

    // Gold
    leagueGoldI({
      variables: {
        region,
        tier: 'GOLD',
        division: 'I',
        queue,
      },
    });
    leagueGoldII({
      variables: {
        region,
        tier: 'GOLD',
        division: 'II',
        queue,
      },
    });
    leagueGoldIII({
      variables: {
        region,
        tier: 'GOLD',
        division: 'III',
        queue,
      },
    });
    leagueGoldIV({
      variables: {
        region,
        tier: 'GOLD',
        division: 'IV',
        queue,
      },
    });

    // Silver
    leagueSilverI({
      variables: {
        region,
        tier: 'SILVER',
        division: 'I',
        queue,
      },
    });
    leagueSilverII({
      variables: {
        region,
        tier: 'SILVER',
        division: 'II',
        queue,
      },
    });
    leagueSilverIII({
      variables: {
        region,
        tier: 'SILVER',
        division: 'III',
        queue,
      },
    });
    leagueSilverIV({
      variables: {
        region,
        tier: 'SILVER',
        division: 'IV',
        queue,
      },
    });

    // Bronze
    leagueBronzeI({
      variables: {
        region,
        tier: 'BRONZE',
        division: 'I',
        queue,
      },
    });
    leagueBronzeII({
      variables: {
        region,
        tier: 'BRONZE',
        division: 'II',
        queue,
      },
    });
    leagueBronzeIII({
      variables: {
        region,
        tier: 'BRONZE',
        division: 'III',
        queue,
      },
    });
    leagueBronzeIV({
      variables: {
        region,
        tier: 'BRONZE',
        division: 'IV',
        queue,
      },
    });

    // Iron
    leagueIronI({
      variables: {
        region,
        tier: 'IRON',
        division: 'I',
        queue,
      },
    });
    leagueIronII({
      variables: {
        region,
        tier: 'IRON',
        division: 'II',
        queue,
      },
    });
    leagueIronIII({
      variables: {
        region,
        tier: 'IRON',
        division: 'III',
        queue,
      },
    });
    leagueIronIV({
      variables: {
        region,
        tier: 'IRON',
        division: 'IV',
        queue,
      },
    });
  };

  const leagueDataAnaliz = (event) => {
    event.preventDefault();
    const region = event.target.elements.region.value;
    const queue = event.target.elements.queue.value;
    const division = event.target.elements.division.value;
    const tier = event.target.elements.tier.value;
    league({
      variables: {
        region,
        tier,
        division,
        queue,
      },
    });
  };

  return (
    <Wrapper>
      <SideBar selected="league" />
      <Main>
        <WrapContainer>
          <Head>Legue Single</Head>
          <SelectContainer onSubmit={leagueDataAnaliz}>
            <Container>
              <Label htmlFor="region">Region</Label>
              <Select id="region">
                <option value="tr1">Republic of Turkey</option>
                <option value="euw1">Europe West</option>
                <option value="kr">Republic of Korea</option>
                <option value="na1">North America</option>
                <option value="br1">Brazil</option>
                <option value="eun1">Europe Nordic & East</option>
                <option value="oc1">Oceania</option>
                <option value="ru">Russia</option>
                <option value="jp1">Japan</option>
                <option value="la1">Latin America North</option>
                <option value="la2">Latin America South</option>
              </Select>
            </Container>
            <Container>
              <Label htmlFor="tier">Tier</Label>
              <Select id="tier">
                <option value="CHALLENGER">CHALLENGER</option>
                <option value="GRANDMASTER">GRANDMASTER</option>
                <option value="MASTER">MASTER</option>
                <option value="DIAMOND">DIAMOND</option>
                <option value="PLATINUM">PLATINUM</option>
                <option value="GOLD">GOLD</option>
                <option value="SILVER">SILVER</option>
                <option value="BRONZE">BRONZE</option>
                <option value="IRON">IRON</option>
              </Select>
            </Container>
            <Container>
              <Label htmlFor="division">Division</Label>
              <Select id="division">
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </Select>
            </Container>
            <Container>
              <Label htmlFor="queue">Queue</Label>
              <Select id="queue">
                <option value="RANKED_SOLO_5x5">RANKED_SOLO_5x5</option>
                <option value="RANKED_FLEX_SR">RANKED_FLEX_SR</option>
              </Select>
            </Container>
            <Container>
              {leagueLoading ? (
                <Button disabled type="submit">
                  Loading
                </Button>
              ) : (
                <Button type="submit">START</Button>
              )}
            </Container>
          </SelectContainer>
        </WrapContainer>
        <WrapContainer>
          <Head>Legue Multi</Head>
          <SelectContainer onSubmit={leagueMultiAnaliz}>
            <Container>
              <Label htmlFor="region">Region</Label>
              <Select id="region">
                <option value="tr1">Republic of Turkey</option>
                <option value="euw1">Europe West</option>
                <option value="kr">Republic of Korea</option>
                <option value="na1">North America</option>
                <option value="br1">Brazil</option>
                <option value="eun1">Europe Nordic & East</option>
                <option value="oc1">Oceania</option>
                <option value="ru">Russia</option>
                <option value="jp1">Japan</option>
                <option value="la1">Latin America North</option>
                <option value="la2">Latin America South</option>
              </Select>
            </Container>
            <Container>
              <Label htmlFor="queue">Queue</Label>
              <Select id="queue">
                <option value="RANKED_SOLO_5x5">RANKED_SOLO_5x5</option>
                <option value="RANKED_FLEX_SR">RANKED_FLEX_SR</option>
              </Select>
            </Container>
            <Container>
              <Button type="submit">START</Button>
            </Container>
          </SelectContainer>

          <table style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th>Division</th>
                <th>CHALLENGER</th>
                <th>GRANDMASTER</th>
                <th>MASTER</th>
                <th>DIAMOND</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>I</th>
                <TdModule loading={challengerLoading} />
                <TdModule loading={grandLoading} />
                <TdModule loading={masterLoading} />
                <TdModule loading={diamondLoadingI} />
              </tr>
              <tr>
                <th>II</th>
                <td />
                <td />
                <td />
                <TdModule loading={diamondLoadingII} />
              </tr>
              <tr>
                <th>III</th>
                <td />
                <td />
                <td />
                <TdModule loading={diamondLoadingIII} />
              </tr>
              <tr>
                <th>IV</th>
                <td />
                <td />
                <td />
                <TdModule loading={diamondLoadingIV} />
              </tr>
            </tbody>
          </table>
          <table style={{ marginTop: '10px' }}>
            <thead>
              <tr>
                <th>Division</th>
                <th>PLATINUM</th>
                <th>GOLD</th>
                <th>SILVER</th>
                <th>BRONZE</th>
                <th>IRON</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>I</th>
                <TdModule loading={platinumLoadingI} />
                <TdModule loading={goldLoadingI} />
                <TdModule loading={silverLoadingI} />
                <TdModule loading={bronzeLoadingI} />
                <TdModule loading={ironLoadingI} />
              </tr>
              <tr>
                <th>II</th>
                <TdModule loading={platinumLoadingII} />
                <TdModule loading={goldLoadingII} />
                <TdModule loading={silverLoadingII} />
                <TdModule loading={bronzeLoadingII} />
                <TdModule loading={ironLoadingII} />
              </tr>
              <tr>
                <th>III</th>
                <TdModule loading={platinumLoadingIII} />
                <TdModule loading={goldLoadingIII} />
                <TdModule loading={silverLoadingIII} />
                <TdModule loading={bronzeLoadingIII} />
                <TdModule loading={ironLoadingIII} />
              </tr>
              <tr>
                <th>IV</th>
                <TdModule loading={platinumLoadingIV} />
                <TdModule loading={goldLoadingIV} />
                <TdModule loading={silverLoadingIV} />
                <TdModule loading={bronzeLoadingIV} />
                <TdModule loading={ironLoadingIV} />
              </tr>
            </tbody>
          </table>
        </WrapContainer>
      </Main>
    </Wrapper>
  );
}

export default withRouter(League);
