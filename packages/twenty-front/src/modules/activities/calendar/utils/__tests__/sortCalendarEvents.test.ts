import { addHours } from 'date-fns';

import {
  sortCalendarEventsAsc,
  sortCalendarEventsDesc,
} from '../sortCalendarEvents';

const someDate = new Date(2000, 1, 1);
const someDatePlusOneHour = addHours(someDate, 1);
const someDatePlusTwoHours = addHours(someDate, 2);
const someDatePlusThreeHours = addHours(someDate, 3);

describe('sortCalendarEventsAsc', () => {
  it('sorts non-intersecting events by ascending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusOneHour,
    };
    const eventB = {
      startsAt: someDatePlusTwoHours,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(-1);
    expect(invertedArgsResult).toBe(1);
  });

  it('sorts intersecting events by start date ascending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusTwoHours,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(-1);
    expect(invertedArgsResult).toBe(1);
  });

  it('sorts events with same start date by end date ascending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusTwoHours,
    };
    const eventB = {
      startsAt: someDate,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(-1);
    expect(invertedArgsResult).toBe(1);
  });

  it('sorts events with same end date by start date ascending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusThreeHours,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(-1);
    expect(invertedArgsResult).toBe(1);
  });

  it('sorts events without end date by start date ascending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(-1);
    expect(invertedArgsResult).toBe(1);
  });

  it('returns 0 for events with same start date and no end date', () => {
    // Given
    const eventA = {
      startsAt: someDate,
    };
    const eventB = {
      startsAt: someDate,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(0);
    expect(invertedArgsResult).toBe(0);
  });

  it('returns 0 for events with same start date if one of them has no end date', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusOneHour,
    };
    const eventB = {
      startsAt: someDate,
    };

    // When
    const result = sortCalendarEventsAsc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsAsc(eventB, eventA);

    // Then
    expect(result).toBe(0);
    expect(invertedArgsResult).toBe(0);
  });
});

describe('sortCalendarEventsDesc', () => {
  it('sorts non-intersecting events by descending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusOneHour,
    };
    const eventB = {
      startsAt: someDatePlusTwoHours,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result).toBe(1);
    expect(invertedArgsResult).toBe(-1);
  });

  it('sorts intersecting events by start date descending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusTwoHours,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result).toBe(1);
    expect(invertedArgsResult).toBe(-1);
  });

  it('sorts events with same start date by end date descending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusTwoHours,
    };
    const eventB = {
      startsAt: someDate,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result).toBe(1);
    expect(invertedArgsResult).toBe(-1);
  });

  it('sorts events with same end date by start date descending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusThreeHours,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
      endsAt: someDatePlusThreeHours,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result).toBe(1);
    expect(invertedArgsResult).toBe(-1);
  });

  it('sorts events without end date by start date descending order', () => {
    // Given
    const eventA = {
      startsAt: someDate,
    };
    const eventB = {
      startsAt: someDatePlusOneHour,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result).toBe(1);
    expect(invertedArgsResult).toBe(-1);
  });

  it('returns 0 for events with same start date and no end date', () => {
    // Given
    const eventA = {
      startsAt: someDate,
    };
    const eventB = {
      startsAt: someDate,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result === 0).toBe(true);
    expect(invertedArgsResult === 0).toBe(true);
  });

  it('returns 0 for events with same start date if one of them has no end date', () => {
    // Given
    const eventA = {
      startsAt: someDate,
      endsAt: someDatePlusOneHour,
    };
    const eventB = {
      startsAt: someDate,
    };

    // When
    const result = sortCalendarEventsDesc(eventA, eventB);
    const invertedArgsResult = sortCalendarEventsDesc(eventB, eventA);

    // Then
    expect(result === 0).toBe(true);
    expect(invertedArgsResult === 0).toBe(true);
  });
});
