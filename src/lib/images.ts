const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMG = {
  heroShip: u("1494412574643-ff11b0a5c1c3", 1800),
  vehicle: u("1503376780353-7e6692767b70"),
  vehicleHero: u("1492144534655-ae79c964c9d7", 1800),
  goods: u("1586528116311-ad8dd3c8310d"),
  goodsHero: u("1553413077-190dd305871c", 1800),
  vehicleBlue: u("1552519507-da3b142c6e3d"),
  vehicleSmall: u("1549317661-bd32c8ce0db2"),
  air: u("1436491865332-7a61a109cc05"),
  truck: u("1601584115197-04ecc0da31d7"),
};
