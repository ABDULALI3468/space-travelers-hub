import MissionService from '../../services/MissionsService';

test('retrieve all the missions from the Api', async () => {
  const missions = await MissionService.getMissions();
  expect(missions).not.toBeUndefined();
});
