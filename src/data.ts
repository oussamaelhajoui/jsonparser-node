// declare module gameData {
    export interface MGameObject {
        m_FileID: number;
        m_PathID: number;
    }

    export interface MScript {
        m_FileID: number;
        m_PathID: number;
    }

    export interface View {
        _mode: number;
        _softReference: string;
        _customPackageName: string;
        _parentReference: string;
    }

    export interface GameplayPropPrefab {
        _mode: number;
        _softReference: string;
        _customPackageName: string;
        _parentReference: string;
    }

    export interface BaseVitality {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseAttack {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseDefense {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseDetection {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseDodge {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseMiss {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseVigilence {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseLethality {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseDexterity {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseAgility {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseLuck {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseCritChance {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseCritDamage {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface StatsData {
        MinLevel: number;
        MaxLevel: number;
        BaseVitality: StatsDefault;
        BaseAttack: StatsDefault;
        BaseDefense: StatsDefault;
        BaseDetection: StatsDefault;
        BaseDodge: StatsDefault;
        BaseMiss: StatsDefault;
        BaseVigilence: StatsDefault;
        BaseLethality: StatsDefault;
        BaseDexterity: StatsDefault;
        BaseAgility: StatsDefault;
        BaseLuck: StatsDefault;
        BaseCritChance: StatsDefault;
        BaseCritDamage: StatsDefault;
    }

interface StatsDefault {
    baseStat: number;
    perLevelGain: number;
}

    export interface Array {
        data: StatsData;
    }

    export interface Stats {
        Array: Array[];
    }

    export interface Data2 {
        DNA: number;
        PromoteTime: number;
        SoftCurrency: number;
    }

    export interface Array2 {
        data: Data2;
    }

    export interface RankProgression {
        Array: Array2[];
    }

    export interface Array3 {
        data: string;
    }

    export interface SkillsIds {
        Array: Array3[];
    }

    export interface Audio {
        VO: string;
        Footsteps: string;
        Foley: string;
    }

    export interface Weapon {
        _mode: number;
        _softReference: string;
        _customPackageName: string;
        _parentReference: string;
    }

    export interface FightAccessory {
        Weapon: Weapon;
        Type: number;
    }

    export interface WeaponsAllowed {
        OneHandedSword: number;
        Dagger: number;
        Blunt: number;
        Polearm: number;
        TwoHandedSword: number;
        Axe: number;
        HiddenBlade: number;
    }

    export interface ArmorAllowed {
        HeavyArmor: number;
        MidArmor: number;
        LightArmor: number;
    }

    export interface AccessoriesAllowed {
        Belt: number;
        Boots: number;
        Pouch: number;
    }

    export interface Portrait {
        _mode: number;
        _softReference: string;
        _customPackageName: string;
        _parentReference: string;
    }

    export interface PortraitLocked {
        _mode: number;
        _softReference: string;
        _customPackageName: string;
        _parentReference: string;
    }

    export interface Data3 {
        _keyRoleID: string;
        _affinity: number;
    }

    export interface Array4 {
        data: Data3;
    }

    export interface SerializedKeyRoleAffinities {
        Array: Array4[];
    }

    export interface KeyRoleAffinities {
        _serializedMainKeyRole: string;
        _serializedKeyRoleAffinities: SerializedKeyRoleAffinities;
    }

    export interface Roles {
        Array: any[];
    }

    export interface Array5 {
        data: string;
    }

    export interface RoleTextKeys {
        Array: Array5[];
    }

    export interface Array6 {
        data: string;
    }

    export interface PerksIds {
        Array: Array6[];
    }

    export interface BaseCrafting {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseProduction {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface BaseLearning {
        BaseStat: number;
        PerLevelGain: number;
    }

    export interface Data4 {
        MinLevel: number;
        MaxLevel: number;
        BaseCrafting: StatsDefault;
        BaseProduction: StatsDefault;
        BaseLearning: StatsDefault;
    }

    export interface Array7 {
        data: Data4;
    }

    export interface VillaStats {
        Array: Array7[];
    }

    export interface RelatedTLEData {
        MainVisualId: string;
        PointsSpriteId: string;
        PointsBigSpriteId: string;
        ColorPaletteId: string;
        HeaderLocKey: string;
        NameLocKey: string;
        TimePeriodLocKey: string;
        LoreLocKey: string;
    }

    export interface Base {
        m_GameObject: MGameObject;
        m_Enabled: number;
        m_Script: MScript;
        m_Name: string;
        Name: string;
        LongName: string;
        Gender: number;
        View: View;
        GameplayPropPrefab: GameplayPropPrefab;
        StartingLevel: number;
        StartingRank: number;
        Stats: Stats;
        RankProgression: RankProgression;
        SkillsIds: SkillsIds;
        Audio: Audio;
        DefaultArmorId: string;
        DefaultAccessoryId: string;
        DefaultWeaponId: string;
        FightAccessory: FightAccessory;
        DefaultEnemyTypeId: string;
        WeaponsAllowed: WeaponsAllowed;
        ArmorAllowed: ArmorAllowed;
        AccessoriesAllowed: AccessoriesAllowed;
        AssassinationHandedness: number;
        Portrait: Portrait;
        PortraitLocked: PortraitLocked;
        Rarity: number;
        _class: number;
        _keyRoleAffinities: KeyRoleAffinities;
        Roles: Roles;
        RoleTextKeys: RoleTextKeys;
        PerksIds: PerksIds;
        VillaStats: VillaStats;
        IsRecruitable: number;
        IsUnlockedByDefault: number;
        IsSecret: number;
        IsInMetaEvent: number;
        RelatedTLEData: RelatedTLEData;
        _recruitTutorialStep: string;
    }

    export default interface gameData {
        Base: Base;
    }
// }



