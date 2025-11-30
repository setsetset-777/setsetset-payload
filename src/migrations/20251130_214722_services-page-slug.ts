import {
  MigrateDownArgs,
  MigrateUpArgs,
} from '@payloadcms/db-mongodb'


export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const oldSlug = "services-page";
  const newSlug = "services";

  const collection = payload.db.connection.collection("globals");

  // Read the old global
  const existing = await collection.findOne({ globalType: oldSlug });

  if (existing) {
    // Update the slug
    await collection.insertOne({
      ...existing,
      _id: undefined, // allow Mongo to generate a new id
      globalType: newSlug,
    });

    // Delete old entry
    await collection.deleteOne({ _id: existing._id });
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  const oldSlug = "header";
  const newSlug = "siteHeader";

  const collection = payload.db.connection.collection("payload-globals");

  const existing = await collection.findOne({ globalType: newSlug });

  if (existing) {
    await collection.insertOne({
      ...existing,
      _id: undefined,
      globalType: oldSlug,
    });

    await collection.deleteOne({ _id: existing._id });
  }
}
