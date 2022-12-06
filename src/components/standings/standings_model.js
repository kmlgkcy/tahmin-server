const { dbClient: db, dbError } = require('../../utils/database');
const createStandings = async (standings) => {
  try {
    const response = await db.standings.create({ data: standings });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const createManyStandings = async (standings) => {
  try {
    const response = await db.standings.createMany({ data: standings });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const getStandings = async (standingsId) => {
  try {
    const response = await db.standings.findUnique({
      where: { id: standingsId },
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const searchStandings = async (standingsId) => {
  try {
    const response = await db.standings.findMany({
      where: { id: { startsWith: standingsId } },
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const updateStandings = async (standingsId, standings) => {
  try {
    const response = await db.standings.update({
      where: { id: standingsId },
      data: standings,
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const deleteStandings = async (standingsId) => {
  try {
    const response = await db.standings.delete({
      where: { id: standingsId },
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const getAllStandings = async () => {
  try {
    const response = await db.standings.findMany({
      orderBy: { id: 'asc' },
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
const deleteManyStandings = async (standingsIds) => {
  try {
    const response = await db.standings.deleteMany({
      where: { id: { in: standingsIds } },
    });
    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error: dbError(error),
    };
  }
};
module.exports = {
  createStandings,
  createManyStandings,
  searchStandings,
  getStandings,
  getAllStandings,
  updateStandings,
  deleteManyStandings,
  deleteStandings,
};
